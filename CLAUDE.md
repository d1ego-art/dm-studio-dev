# CLAUDE.md - DM Studio Dev (dmstudio.dev)

> Decisiones acordadas el 2026-11-16. Primera versión construida el mismo día. Puntos **[PENDIENTE]** requieren respuesta del dueño.

## Contexto
Portafolio y captación de clientes de la agencia de desarrollo web de los hermanos Morales (`danielmoralesc` y `d1ego-art`): WordPress, plataformas científicas OJS/PKP, e-commerce y desarrollos a medida, incluida visualización 3D web.
- Repo: organización **`dmstudio-dev`** en GitHub. Hosting: **GitHub Pages + Jekyll**. Dominio `dmstudio.dev` aún no comprado: usar URL de Pages y `baseurl` configurable.
- Costo $0 de entrada.
- **Bilingüe: español e inglés** (rutas `/` y `/en/`, selector de idioma, textos en `_data/i18n.yml` o colecciones por idioma; `hreflang`).

## Diseño
1. Oscuro por defecto, minimalista y técnico, con Lighthouse cercano a 100. Comparte ADN con `dmstudio.cl` (marca "Dm", tipografía mono para datos, misma grilla) pero con un acento propio, más frío que el rojo y la madera del estudio.
2. Cross-linking elegante en el navbar y el footer hacia el estudio hermano `dmstudio.cl` (y viceversa).
3. CSS propio y JS mínimo, sin dependencias pesadas.

## Contenido
- **Servicios:** WordPress a medida; implementación y soporte de OJS/PKP para revistas científicas; e-commerce (incluida la venta de cursos grabados); sitios estáticos de alto rendimiento; visualización 3D.
- **Portafolio (`_proyectos/`)**, filtrable por categoría (`WordPress`, `PKP / OJS`, `E-commerce`, `Web 3D / Custom`). Cada uno con cliente, stack, desafío, captura y enlace:
  - https://alahr.org/
  - https://congreso2027.alahr.org/
  - https://haal.cl/index.php/haal/es (OJS)
  - https://riidei.umayor.cl/index.php/riidei (OJS)
  - https://kateatenas.com/ (en curso: e-commerce de cursos grabados, tipo Udemy)
- **Equipo:** ambos socios con enlace a GitHub.
- **Contacto (Web3Forms, key exclusiva de este sitio [PENDIENTE: key y correo]):** nombre o empresa, email, tipo de servicio, detalles. **Sin precios ni campo de presupuesto**: solo contacto directo con la organización.

## Estado y estructura (2026-11-16)
- Sitio de una página por idioma: `index.html` (es) y `en/index.html` (en). Ambos incluyen `_includes/inicio.html`; el idioma sale de `page.lang`.
- Textos de interfaz, servicios, proceso y categorías: `_data/i18n.yml`. Datos editables (Web3Forms, email, equipo, URL de dmstudio.cl): `_data/sitio.yml`.
- Portafolio: `_proyectos/NN-nombre.md`, solo front matter (`orden`, `categoria`, `url`, `imagen`, `cliente`, `stack`, `es`/`en` con `titulo`, `resumen`, `desafio`; `en_curso: true` opcional). Sin página propia: cada tarjeta enlaza al sitio en vivo.
- Capturas en `assets/img/proyectos/*.webp` (800×500, tomadas de los sitios en vivo). Sexto proyecto agregado: el configurador 3D de dmstudio.cl (categoría Web 3D / Custom).
- Acento frío `--accent: #5fd3e6`; el rojo del logo solo aparece en el enlace a dmstudio.cl.
- Avatares del equipo: `github.com/<usuario>.png` (si suben foto a GitHub, se actualiza sola).
- Local: configuración `dmstudio-dev` en `C:\DesarrolloWeb\.claude\launch.json` → http://localhost:4011/dm-studio-dev/
- [PENDIENTE] Key de Web3Forms y correo de este sitio (`_data/sitio.yml`). Sin key, el formulario muestra un aviso.
- [PENDIENTE] Confirmar nombres y roles del equipo (`_data/sitio.yml`): se asumió "Diego Morales" para `d1ego-art`.
- [PENDIENTE] Activar GitHub Pages en el repo (Settings → Pages → rama `main`, carpeta raíz).
