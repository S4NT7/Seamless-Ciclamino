# Catálogo Seamless | Ciclamino — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks ni build step). Es una copia exacta, en diseño y contenido, del artefacto "Catálogo Seamless | Ciclamino".

Publicado en: https://s4nt7.github.io/Seamless-Ciclamino/

## Estructura

```
index.html              El catálogo completo (portada, Bodies, Enterizos, pie de página)
css/styles.css          Todo el estilo (incluye adaptación a móvil y modo oscuro automático)
js/main.js              Visor de fotos ampliadas (tocar una foto para ampliarla)
images/catalogo/        Portadas, fotos de las tarjetas, fotos ampliadas y logo de Ciclamino
images/favicon*.png     Ícono del sitio
bodies.html, enterizos.html, mayoristas.html, contacto.html
                        Páginas del sitio anterior: ahora redirigen al catálogo para que
                        los enlaces viejos no queden rotos
```

## Actualizar el sitio en GitHub

1. Entra al repositorio `S4NT7/Seamless-Ciclamino` → "Add file" → "Upload files".
2. Arrastra **todo el contenido** de esta carpeta (los archivos y las carpetas `css`, `js` e `images`), no la carpeta contenedora. Arrastra las carpetas directamente para que se conserve la estructura.
3. "Commit changes". GitHub reemplaza los archivos que tienen el mismo nombre.
4. Espera 1–2 minutos y recarga el sitio (Ctrl + F5 para evitar la versión en caché).

Limpieza opcional: las fotos viejas que estaban directamente en `images/` (por ejemplo `bbms.jpg`, `ecml-sr.jpg`, `bbml-ov-flat.jpg`) ya no se usan. Puedes borrarlas desde GitHub, pero dejarlas no afecta el sitio.
