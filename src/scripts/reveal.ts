/**
 * Aparición difuminada al hacer scroll.
 *
 * Cada <section data-reveal> se observa una vez. Cuando entra en pantalla,
 * sus hijos .rev se revelan escalonados de 90 en 90 ms.
 */

const STAGGER_MS = 90;

function show(el: HTMLElement, delay: number): void {
  el.style.transitionDelay = `${delay}ms`;
  el.classList.add('in');
}

export function initReveal(): void {
  const all = Array.from(document.querySelectorAll<HTMLElement>('.rev'));

  // Sin IntersectionObserver (navegador viejo): se muestra todo de golpe.
  if (!('IntersectionObserver' in window)) {
    all.forEach((el) => show(el, 0));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const items = Array.from(
          entry.target.querySelectorAll<HTMLElement>('.rev'),
        );
        items.forEach((el, i) => show(el, i * STAGGER_MS));

        io.unobserve(entry.target); // una sola vez: no se re-esconde al subir
      }
    },
    { rootMargin: '0px 0px -14% 0px', threshold: 0.05 },
  );

  document
    .querySelectorAll<HTMLElement>('[data-reveal]')
    .forEach((sec) => io.observe(sec));

  /**
   * Red de seguridad.
   *
   * IMPORTANTE: revela SOLO lo que ya está en pantalla. Una red que revele
   * TODO a los N segundos quema el efecto — si el visitante se queda leyendo
   * el hero, para cuando baja ya está todo visible y no ve nada aparecer.
   */
  window.setTimeout(() => {
    for (const el of all) {
      if (el.classList.contains('in')) continue;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) show(el, 0);
    }
  }, 2500);
}
