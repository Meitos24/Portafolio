/**
 * El contenido vive aquí, separado de la plantilla.
 * Para agregar un proyecto: un objeto más en el array. No se toca el .astro.
 */

export type Estado = 'activo' | 'pausa';

export interface Proyecto {
  titulo: string;
  /** Acepta <em> para resaltar. Se pinta con set:html en la plantilla. */
  descripcion: string;
  tags: string[];
  nota: string;
  estado: Estado;
}

export const proyectos: Proyecto[] = [
  {
    titulo: 'Kiosko Vertical',
    descripcion:
      'Check-in de visitantes por <em>reconocimiento facial y de voz</em> para fraccionamientos. Trabajé el backend: los servicios de captura y el pipeline de verificación. <em>2.º lugar</em> en FEPRO 2026.',
    tags: ['Go', 'Python', 'visión por computadora'],
    nota: 'backend · equipo de 6 · repositorio privado',
    estado: 'archivado',
  },
  {
    titulo: 'Caserio',
    descripcion:
      'Monorepo con panel de administración y landing para una inmobiliaria, desplegado en Namecheap con workflows de GitHub Actions.',
    tags: ['monorepo', 'Next.js', 'CI/CD'],
    nota: 'admin en producción · landing en producción',
    estado: 'activo',
  },
  // {
  //   titulo: 'Reservas para estudio fotográfico',
  //   descripcion:
  //     'Sistema de reservas con calendario de sesiones, control de traslapes y panel del fotógrafo. PHP 8 sobre MySQL con <em>PDO</em> y consultas preparadas.',
  //   tags: ['PHP 8', 'MySQL', 'PDO'],
  //   nota: 'backend terminado · UI en curso',
  //   estado: 'activo',
  // },
];
