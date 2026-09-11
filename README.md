# Seamless — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks ni build step) para el catálogo Seamless: Inicio, Bodies, Enterizos, Mayoristas y Contacto.

## Estructura

```
index.html         Inicio
bodies.html         Catálogo de bodies (4 referencias)
enterizos.html       Catálogo de enterizos (7 referencias)
mayoristas.html       Programa de mayoristas
contacto.html        Contacto
css/styles.css       Todo el estilo del sitio (incluye modo oscuro automático)
js/main.js          Menú móvil (hamburguesa)
images/            Fotos de producto + favicon
```

No hay build ni dependencias: es HTML/CSS/JS plano, lo que ves en el repo es exactamente lo que se publica.

## Publicarlo gratis en GitHub Pages

1. **Crea el repositorio.** En GitHub, botón "New repository". Nombre sugerido: `seamless-web` (público, para que Pages sea gratis). No marques "Add a README" — ya tienes uno.
2. **Sube estos archivos** a la raíz del repo. Formas de hacerlo:
   - Más fácil: en la página del repo vacío, "uploading an existing file" → arrastra todos los archivos y carpetas de este paquete (manteniendo la estructura de carpetas `css/`, `js/`, `images/`) → commit.
   - Con git en tu computador:
     ```
     git init
     git add .
     git commit -m "Sitio Seamless"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/seamless-web.git
     git push -u origin main
     ```
3. **Activa GitHub Pages.** En el repo: Settings → Pages (menú de la izquierda) → en "Build and deployment" → Source: "Deploy from a branch" → Branch: `main`, carpeta `/ (root)` → Save.
4. **Espera 1-2 minutos.** GitHub te dará la URL, normalmente:
   `https://TU-USUARIO.github.io/seamless-web/`
   Esa misma pantalla de Settings → Pages muestra el link cuando ya está listo.
5. **Dominio propio (opcional).** Si más adelante compras un dominio (ej. `seamless.co`), en Settings → Pages agregas ese dominio en "Custom domain" y configuras un registro CNAME en tu proveedor de dominio apuntando a `TU-USUARIO.github.io`.

## Actualizar el sitio después

Cualquier cambio (nueva foto, texto, precio) es editar el archivo correspondiente y volver a subirlo/hacer push. GitHub Pages se actualiza solo en 1-2 minutos, sin pasos adicionales.

## Pendientes conocidos (no inventados, a propósito)

- **Fotos faltantes:** `BBML-OV` (body manga larga con óvalo) y `ELCH-CR` (enterizo largo cuello halter) muestran un placeholder "Foto pendiente" en vez de foto real. Para agregarlas: exporta la foto a ~900px de ancho en JPG, nómbrala igual que las demás (ej. `bbml-ov.jpg`) en `images/`, y edita la tarjeta correspondiente en `bodies.html` / `enterizos.html` reemplazando el bloque `pc-photo--empty` por un `<img>` (usa cualquier tarjeta ya resuelta como plantilla).
- **Mayoristas:** pedido mínimo y descuento mayorista están marcados "Por definir" en `mayoristas.html`. Búscalos y reemplaza el texto cuando los definas.
- **Contacto:** redes sociales y horario de atención están "Por definir" en `contacto.html`.

## Cómo previsualizarlo en tu computador antes de publicar

No necesitas nada especial — puedes abrir `index.html` directamente en el navegador. Si prefieres verlo servido como en producción (recomendado, evita pequeños problemas de rutas), con Python instalado:

```
python3 -m http.server 8000
```

y abre `http://localhost:8000` en el navegador.
