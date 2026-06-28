# Notas de desarrollo

Este documento resume como esta construida la aplicacion y donde vive cada responsabilidad. Para arrancar el proyecto, ver el [README](../README.md). Para la relacion con los requisitos de evaluacion, ver la [justificacion de requisitos](./justificacion-requisitos.md).

## Objetivo tecnico

Vantastic! es una aplicacion React que simula una plataforma de alquiler de vans camper vintage. No usa backend real: MirageJS crea una API local para que la app pueda hacer `fetch` como si consumiera un servicio externo.

El foco tecnico esta en:

- Rutas con React Router.
- Componentes reutilizables.
- Estado local y global.
- Custom hooks.
- Formulario con validacion.
- Datos desde API mock.
- Interfaz responsive con Tailwind CSS y CSS organizado por secciones.

## Flujo de arranque

1. `src/main.jsx` importa estilos globales, arranca la API MirageJS y monta React.
2. `BrowserRouter` permite usar rutas y enlaces internos.
3. `FavoritesContextProvider` envuelve la app para que favoritos este disponible en catalogo, tarjetas y detalle.
4. `App.jsx` define la tabla de rutas.
5. `Layout.jsx` renderiza Header, contenido principal con `Outlet` y Footer.

## Rutas

Las rutas principales estan en `src/App.jsx`:

- `/`: Home.
- `/home`: alias de Home.
- `/vans`: catalogo.
- `/vans/:id`: detalle de una van.
- `/vans/:id/specs`: specs dentro del detalle.
- `/vans/:id/ratings`: valoraciones dentro del detalle.
- `*`: pagina 404.

`VanDetail` usa rutas anidadas para que el layout principal de la van no cambie mientras se alterna el contenido secundario. En desktop, specs y ratings tambien se muestran en dos paneles directos para aprovechar mejor el espacio.

## API mock

`src/api/server.js` crea un servidor MirageJS con dos modelos:

- `van`
- `location`

Endpoints activos:

- `GET /api/vans`: devuelve todas las vans.
- `GET /api/vans/:id`: devuelve una van por id.
- `GET /api/locations`: devuelve ciudades para el formulario.

Los datos de cada van incluyen informacion principal, tipo, precio, imagen, especificaciones y valoraciones.

## Estado y hooks

`src/hooks/useFetch.jsx`

- Recibe una URL.
- Ejecuta `fetch` en un `useEffect`.
- Devuelve `{ data, loading, error }`.
- Reinicia `loading` y `error` cuando cambia la URL.
- Ignora resultados obsoletos si el componente se desmonta durante la peticion.

`src/context/FavoritesContext.jsx`

- Guarda el array global de ids favoritas.
- Expone `toggleFavorite(id)`.
- Expone `useFavorites()` para que los componentes no importen el contexto directamente.

`src/pages/Vans.jsx`

- Usa `useSearchParams` para que los filtros vivan en la URL.
- Esto hace que `/vans?type=viajera&favs=true` sea compartible y recuperable al refrescar.

## Componentes principales

`Layout`

- Une Header, contenido y Footer.
- Controla scroll al inicio al cambiar de ruta.
- Si la URL incluye hash, hace scroll a la seccion correspondiente.

`Header`

- Logo principal.
- CTA hacia el catalogo.

`Footer`

- Texto de marca.
- Iconos sociales placeholder.
- Links a secciones de Home mediante hash.
- Links legales placeholder.

`VanCard`

- Tarjeta reutilizable del catalogo.
- Toda la tarjeta es un `Link` al detalle.
- El corazon de favoritos detiene el click del link para actuar como boton independiente.

`BookingForm`

- Usa React Hook Form.
- Carga ciudades desde `/api/locations`.
- Valida nombre, email, telefono, fechas, ciudades y comentarios.
- Usa `useWatch` para impedir que la fecha de entrega sea anterior a la recogida.
- Al enviar, muestra una modal accesible de confirmacion.
- La modal enfoca el boton de cierre, permite cerrar con Escape y devuelve el foco al boton de envio.

`Heart`

- Icono reutilizable para favoritos.
- Recibe `filled` para cambiar el estado visual.

## Home

La home esta dividida en secciones pequenas dentro de `src/pages/sections/`:

- `HomeHero`: entrada visual y CTA principal.
- `HomeFleetPreview`: tres categorias de vans con una imagen aleatoria por tipo.
- `VanPictures`: galeria social/feed con imagenes locales.
- `HomeNewsletterSignup`: newsletter con input y CTA.
- `HomeAboutUs`: historia de marca con imagen decorativa.
- `HomeTestimonialsSocial`: reseñas de clientes.

Los iconos de Lucide en secciones son decorativos y usan `aria-hidden="true"`.

## Estilos

`src/index.css` funciona como inventario y punto de entrada de estilos. Importa:

- `base.css`: reset, fuentes y estilos globales.
- `layout.css`: wrappers generales.
- `header.css` y `footer.css`.
- `home.css`, `van-pictures.css`, `vans.css`, `van-card.css`, `van-detail.css`, `booking.css`.
- `buttons.css`: botones y chips compartidos.

La paleta vintage vive en `tailwind.config.js` como colores `retro-*`.

Durante el desarrollo hubo una etapa de confusion con Tailwind CSS: se mezclaron patrones y configuraciones de distintas versiones, y el CSS termino siendo dificil de seguir. Use Codex para revisar esa situacion, corregir la configuracion activa y dividir el CSS base en modulos mas pequenos por responsabilidad. Una vez ordenada esa base, implemente encima los cambios del estilo vintage final.

## Accesibilidad

Detalles ya implementados:

- Iconos decorativos con `aria-hidden`.
- Botones de favoritos con `aria-label` y `aria-pressed`.
- Modal de reserva con `role="dialog"`, `aria-modal`, `aria-labelledby` y `aria-describedby`.
- Clase `sr-only` para texto solo de lector de pantalla.
- Labels conectados a inputs en formulario.
- Navegacion por rutas y hash con scroll controlado.

## Notas para futuras mejoras

- Persistir favoritos en `localStorage` si se quiere mantenerlos entre sesiones.
- Reemplazar links legales placeholder por rutas o documentos reales.
- Cambiar iconos sociales placeholder por URLs reales.
- Revisar visualmente breakpoints antes de entrega final.
- Reducir peso de imagenes grandes si el objetivo incluye rendimiento.
