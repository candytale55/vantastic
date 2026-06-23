# Justificación de requisitos

Este documento resume cómo se cumplen los requisitos del proyecto. Para instalar y ejecutar la aplicación, consultar el [README](../README.md). Para entender mejor la integración técnica, consultar las [notas de desarrollo](./dev-notes.md).

## Web FULL RESPONSIVE

El proyecto usa CSS responsive con Flexbox, Grid, clases adaptadas por breakpoint y contenedores que cambian de una columna a varias columnas según el tamaño de pantalla. <mark>No se ha confirmado visualmente en todos los dispositivos desde esta revisión, por lo que conviene hacer una prueba final en móvil, tablet y escritorio antes de entregar.</mark>

## Arquitectura útil y fácil de comprender

La aplicación está organizada por responsabilidades: API mock, componentes reutilizables, contexto global, hooks, páginas, secciones y utilidades. Esta separación permite localizar con facilidad la lógica de datos, navegación, estado e interfaz.

## Mínimo de 3 páginas accesibles usando react-router-dom

El proyecto usa `react-router-dom` para definir rutas principales y anidadas. Hay páginas accesibles para inicio, catálogo de vans, detalle de van y página 404; además, el detalle incluye secciones internas para especificaciones y valoraciones.

## Mínimo de 3 estados utilizados con sentido

Se usan estados con finalidad clara: `data`, `loading` y `error` para la carga de datos, y `favorites` para gestionar las vans favoritas. También se usan parámetros de URL para representar filtros sin duplicar estado local innecesario.

## Mínimo de un useEffect para manejar peticiones de datos

El custom hook `useFetch` usa `useEffect` para ejecutar peticiones con `fetch` cuando cambia la URL recibida. Este hook centraliza la lógica de carga, éxito y error.

## Uso de alguna API

El proyecto utiliza una API propia simulada con MirageJS. Esta API expone endpoints para obtener el listado de vans, el detalle de una van y las ciudades disponibles para el formulario de reserva.

## Formulario útil

El detalle de cada van incluye un formulario de reserva hecho con React Hook Form. El formulario valida datos del usuario, fechas, ciudades y comentarios, y carga las ciudades desde la API mock.

## Componentes reutilizables

La interfaz está dividida en componentes reutilizables como `Layout`, `Header`, `Footer`, `VanCard`, `Heart` y `BookingForm`. Estos componentes separan estructura, navegación, tarjetas de catálogo, favoritos y formulario.

## No debe haber re-renderizaciones innecesarias

El proyecto evita algunas re-renderizaciones innecesarias usando React Hook Form para el formulario y derivando los filtros del catálogo desde la URL con `useSearchParams`. <mark>No se ha realizado una medición con React DevTools Profiler, así que este punto se justifica por decisiones de implementación, no por una prueba formal de rendimiento.</mark>

## Uso mínimo de un custom hook

El proyecto incluye `useFetch`, que abstrae la lógica de petición de datos, y `useFavorites`, que simplifica el acceso al contexto de favoritos desde los componentes.

## Uso mínimo de un useContext

La aplicación usa Context API mediante `FavoritesContext`. El provider se aplica en `main.jsx` y permite compartir la lista de favoritos entre el catálogo, las tarjetas y la página de detalle.

## Referencias de evidencia

| Requisito | Evidencia principal |
| --- | --- |
| Web FULL RESPONSIVE | `src/index.css`, clases responsive con `md:` y `lg:`, layouts con Grid y Flexbox |
| Arquitectura útil y fácil de comprender | `src/api/`, `src/components/`, `src/context/`, `src/hooks/`, `src/pages/`, `src/utils/` |
| Mínimo de 3 páginas con `react-router-dom` | `src/App.jsx`, `src/pages/Home.jsx`, `src/pages/Vans.jsx`, `src/pages/VanDetail.jsx`, `src/pages/NotFound.jsx` |
| Mínimo de 3 estados | `src/hooks/useFetch.jsx`, `src/context/FavoritesContext.jsx`, `src/pages/Vans.jsx` |
| Mínimo de un `useEffect` para peticiones | `src/hooks/useFetch.jsx` |
| Uso de una API | `src/api/server.js`, endpoints `/api/vans`, `/api/vans/:id`, `/api/locations` |
| Formulario útil | `src/components/BookingForm.jsx`, `src/pages/VanDetail.jsx` |
| Componentes reutilizables | `src/components/Layout.jsx`, `src/components/VanCard.jsx`, `src/components/Heart.jsx`, `src/components/BookingForm.jsx` |
| Evitar re-renderizaciones innecesarias | `src/components/BookingForm.jsx`, `src/pages/Vans.jsx` |
| Custom hook | `src/hooks/useFetch.jsx`, `src/context/FavoritesContext.jsx` (`useFavorites`) |
| `useContext` | `src/context/FavoritesContext.jsx`, `src/main.jsx` |
