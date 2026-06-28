# Justificacion de requisitos

Este documento relaciona los requisitos principales del proyecto con su implementacion actual. Para instrucciones de uso, ver el [README](../README.md). Para detalles tecnicos, ver las [notas de desarrollo](./dev-notes.md).

## Web full responsive

La app usa layouts responsive con Flexbox, CSS Grid y breakpoints de Tailwind (`sm:`, `md:`, `lg:`). Las secciones cambian de una columna a varias columnas segun el ancho disponible.

Evidencia:

- `src/styles/layout.css`: contenedor reutilizable `.section-shell`.
- `src/styles/home.css`: Hero, About, Newsletter y Testimonios responsive.
- `src/styles/vans.css`: filtros y grid del catalogo.
- `src/styles/van-card.css`: tarjetas fluidas.
- `src/styles/van-detail.css`: detalle en columna para pantallas pequenas y paneles en desktop.

## Arquitectura clara

El proyecto esta separado por responsabilidades:

- `src/api/`: API mock y datos.
- `src/components/`: piezas reutilizables.
- `src/context/`: estado global.
- `src/hooks/`: hooks personalizados.
- `src/pages/`: paginas principales.
- `src/pages/sections/`: secciones de Home y subsecciones de VanDetail.
- `src/styles/`: CSS por area.
- `src/utils/`: funciones puras auxiliares.

Esta organizacion permite encontrar con facilidad rutas, datos, estado, UI y estilos.

## Minimo de 3 paginas con React Router

El proyecto usa `react-router-dom` en `src/App.jsx`.

Paginas principales:

- Home: `/` y `/home`.
- Catalogo: `/vans`.
- Detalle de van: `/vans/:id`.
- NotFound: `*`.

Rutas anidadas:

- `/vans/:id/specs`.
- `/vans/:id/ratings`.

## Minimo de 3 estados usados con sentido

Estados principales:

- `data`, `loading`, `error` en `useFetch`.
- `favorites` en `FavoritesContext`.
- `isSuccessModalOpen` en `BookingForm`.
- `searchParams` en `Vans` para filtros en URL.

Cada estado representa comportamiento real: carga de datos, favoritos, modal de exito y filtros compartibles.

## Minimo de un useEffect para peticiones

`src/hooks/useFetch.jsx` usa `useEffect` para ejecutar `fetch(url)` cuando cambia la URL. El hook tambien controla loading, errores y evita actualizar estado si el resultado llega despues de desmontar el componente.

## Uso de API

La app consume una API mock local con MirageJS.

Endpoints:

- `/api/vans`
- `/api/vans/:id`
- `/api/locations`

Evidencia:

- `src/api/server.js`
- `src/hooks/useFetch.jsx`
- `src/pages/Vans.jsx`
- `src/pages/VanDetail.jsx`
- `src/components/BookingForm.jsx`

## Formulario util

El formulario de reserva esta en `src/components/BookingForm.jsx`.

Incluye:

- Nombre.
- Email.
- Telefono.
- Fecha de recogida.
- Fecha de entrega.
- Ciudad de recogida.
- Ciudad de entrega.
- Comentarios.

Usa React Hook Form para validaciones. Las ciudades vienen desde `/api/locations`. Al enviar correctamente, aparece una modal accesible de confirmacion.

## Componentes reutilizables

Componentes reutilizables relevantes:

- `Layout`: estructura comun.
- `Header`: navegacion superior.
- `Footer`: cierre y enlaces.
- `VanCard`: tarjeta del catalogo.
- `Heart`: icono de favorito.
- `BookingForm`: formulario de reserva.
- `VanSpecsContent` y `VanRatingsContent`: contenido reutilizado entre Outlet movil y layout desktop.

## Evitar re-renderizaciones innecesarias

El proyecto toma varias decisiones sencillas para evitar estado duplicado:

- Los filtros viven en la URL mediante `useSearchParams`.
- `getFilteredVans` es una funcion pura derivada de datos + filtros.
- React Hook Form evita controlar manualmente cada input con `useState`.
- `HomeFleetPreview` usa `useMemo` para escoger imagenes aleatorias solo cuando cambian los datos de vans.

No se ha hecho medicion formal con React DevTools Profiler; esta justificacion se basa en decisiones de implementacion.

## Uso minimo de un custom hook

Custom hooks:

- `useFetch`: peticiones a la API mock.
- `useFavorites`: acceso encapsulado al contexto de favoritos.

## Uso minimo de useContext

`src/context/FavoritesContext.jsx` usa Context API para compartir favoritos entre:

- `VanCard`.
- `Vans`.
- `VanDetail`.

El provider se aplica en `src/main.jsx`.

## Accesibilidad

El proyecto incluye medidas de accesibilidad relevantes:

- Botones con `aria-label` cuando el texto visible no basta.
- Favoritos con `aria-pressed`.
- Modal con `role="dialog"`, `aria-modal`, `aria-labelledby` y `aria-describedby`.
- `sr-only` para texto destinado a lectores de pantalla.
- Inputs con `label` asociado.
- Iconos decorativos con `aria-hidden="true"`.
- Scroll y foco al formulario desde el CTA de detalle.

## Tabla de evidencia

| Requisito | Evidencia principal |
| --- | --- |
| Responsive | `src/styles/home.css`, `src/styles/vans.css`, `src/styles/van-detail.css` |
| Arquitectura clara | `src/api/`, `src/components/`, `src/context/`, `src/hooks/`, `src/pages/`, `src/styles/`, `src/utils/` |
| 3+ paginas con Router | `src/App.jsx`, `Home`, `Vans`, `VanDetail`, `NotFound` |
| 3+ estados | `useFetch`, `FavoritesContext`, `BookingForm`, `useSearchParams` |
| useEffect para peticiones | `src/hooks/useFetch.jsx` |
| API | `src/api/server.js`, `/api/vans`, `/api/vans/:id`, `/api/locations` |
| Formulario util | `src/components/BookingForm.jsx` |
| Componentes reutilizables | `Layout`, `Header`, `Footer`, `VanCard`, `Heart`, `BookingForm` |
| Re-renderizaciones | `Vans.jsx`, `filters.js`, `BookingForm.jsx`, `HomeFleetPreview.jsx` |
| Custom hook | `useFetch`, `useFavorites` |
| useContext | `FavoritesContext.jsx`, `main.jsx` |
| Accesibilidad | `BookingForm.jsx`, `VanCard.jsx`, `VanDetail.jsx`, secciones Home con iconos decorativos |
