# dm-studio-dev

Sitio de **dmstudio.dev**, estudio de desarrollo web (WordPress, OJS/PKP, e-commerce, sitios estáticos y 3D). Jekyll + GitHub Pages, bilingüe español/inglés.

- Español: `/` · Inglés: `/en/`
- Textos: `_data/i18n.yml` · Datos del sitio: `_data/sitio.yml` · Proyectos: `_proyectos/`

## Local

```bash
docker run --rm -p 4011:4000 -v "C:/DesarrolloWeb/dm-studio-dev:/srv/site" -v dmstudio-gems:/usr/local/bundle -w /srv/site ruby:3.3 sh -c "bundle install --quiet && bundle exec jekyll serve --host 0.0.0.0 --force_polling"
```

Abrir http://localhost:4011/dm-studio-dev/

## Agregar un proyecto

1. Captura de 800×500 en `assets/img/proyectos/nombre.webp`.
2. Copiar un archivo de `_proyectos/` y editar el front matter (textos en `es:` y `en:`).
