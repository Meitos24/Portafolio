# Portafolio

Mi portafolio personal, publicado en [guillermo-dev.vercel.app](https://guillermo-dev.vercel.app/). Está diseñado como un archivo fuente: números de línea, secciones como comentarios y una sola tinta de acento.

## Stack

- [Astro](https://astro.build) con TypeScript
- Vitest para los tests
- GitHub Actions para CI
- Vercel para el deploy

## Comandos

Requiere Node 22.12 o superior y pnpm.

| Comando | Qué hace |
| :-------------- | :-------------------------------------------- |
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Levanta el sitio en `localhost:4321` |
| `pnpm check` | Revisa los tipos con `astro check` |
| `pnpm test` | Corre los tests una vez |
| `pnpm build` | Genera el sitio en `dist/` |
| `pnpm preview` | Sirve el build en local |

## Estructura

```text
src/
├── components/   secciones de la página
├── data/         contenido y sus funciones, con sus tests
└── scripts/      tema, tinta de acento y animación de scroll
```

Para agregar un proyecto, se añade un objeto al array de `src/data/proyectos.ts`. No hace falta tocar la plantilla.

## Flujo de cambios

`main` está protegida: nadie puede hacer push directo y todo entra por un Pull Request.

1. El cambio se sube a una rama y se abre un PR.
2. El job `revisar` corre `pnpm check`, `pnpm test` y el build. Si alguno falla, el merge queda bloqueado.
3. Vercel genera un Preview para revisar cómo se ve el cambio.
4. Al hacer merge a `main`, Vercel publica en producción.
