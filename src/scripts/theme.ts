/**
 * Tinta de acento + tema claro/oscuro.
 * Ambos guardan la elección en localStorage, siempre dentro de try/catch:
 * en ventana privada o con cookies bloqueadas, leer localStorage LANZA.
 */

function store(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* sin almacenamiento: la página sigue funcionando, solo no recuerda */
  }
}

function load(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function initInks(): void {
  const root = document.documentElement;
  const inks = Array.from(document.querySelectorAll<HTMLButtonElement>('.ink'));

  function setInk(btn: HTMLButtonElement): void {
    const light = btn.dataset.l;
    const dark = btn.dataset.d;
    if (!light || !dark) return;

    root.style.setProperty('--ink-l', light);
    root.style.setProperty('--ink-d', dark);
    inks.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    store('ink', light);
  }

  inks.forEach((btn) => btn.addEventListener('click', () => setInk(btn)));

  const saved = load('ink');
  if (saved) {
    const match = inks.find((b) => b.dataset.l === saved);
    if (match) setInk(match);
  }
}

export function initTheme(): void {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    // Si nadie ha elegido todavía, el tema actual es el del sistema.
    const current =
      root.getAttribute('data-theme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
  });
}

export function initBarShadow(): void {
  const bar = document.getElementById('bar');
  if (!bar) return;

  const onScroll = (): void => {
    bar.classList.toggle('stuck', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
