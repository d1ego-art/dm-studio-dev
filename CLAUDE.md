# CLAUDE.md - DM Studio Dev (dmstudio.dev)

## Contexto del Proyecto
Portafolio profesional y página de captación de clientes para agencia de desarrollo web (enfocada en WordPress, OJS/PKP, desarrollo a medida y experiencias 3D web). Alojado en **GitHub Pages** con **Jekyll**.

## Reglas de Diseño y Código
1. **Estética:** Minimalista, técnico, moderno y de alto rendimiento (100/100 en Google Lighthouse). Modo oscuro por defecto con acentos sutiles.
2. **Cross-linking:** Incluir en el footer y navbar un enlace elegante hacia el estudio hermano de diseño industrial: `dmstudio.cl`.
3. **Sin dependencias pesadas:** CSS puro (o Tailwind vía CDN/build) y JavaScript mínimo.

## Requerimientos Funcionales
1. **Hero & Propuesta de Valor:** Presentación clara de servicios (Desarrollo WordPress a medida, Implementación y soporte OJS/PKP para revistas científicas, Sitios estáticos de alto rendimiento y Visualización 3D).
2. **Portafolio de Proyectos (`_proyectos/`):**
   - Tarjetas interactivas filtrables por categoría (`WordPress`, `PKP / OJS`, `Web 3D / Custom`).
   - Cada proyecto debe mostrar: Cliente/Nombre, Stack tecnológico usado, Desafío resuelto, Captura de pantalla y enlace al sitio en vivo.
3. **Equipo:** Breve sección presentando a los socios desarrolladores con enlaces a sus perfiles de GitHub (`d1ego-art` y `danielmoralesc`).
4. **Formulario de Cotización Web (Web3Forms):**
   - Formulario conectado a **Web3Forms** (free tier).
   - Campos: Nombre/Empresa, Email, Tipo de servicio (WordPress, PKP/OJS, E-commerce, Otro), Presupuesto estimado, Detalles del proyecto.
