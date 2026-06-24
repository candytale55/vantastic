# Notas de desarrollo

Estas notas explican cómo está integrada la aplicación. Para la puesta en marcha, ver el [README](../README.md). Para la relación con los requisitos de evaluación, ver la [justificación de requisitos](./justificación-requisitos.md).

## Objetivo de la aplicación

Vantastic! simula una plataforma de alquiler de furgonetas camper. El foco del proyecto no es crear un backend real, sino demostrar una aplicación React con rutas, componentes reutilizables, estado, contexto, hooks, formulario y consumo de datos.

## Flujo principal

1. `main.jsx` monta React, activa `BrowserRouter`, importa el servidor MirageJS y envuelve la app con `FavoritesContextProvider`.
2. `App.jsx` define las rutas principales y el layout común.
3. `Vans.jsx` carga la lista de vans desde `/api/vans`, aplica filtros desde la URL y renderiza tarjetas reutilizables.
4. `VanDetail.jsx` carga una van por `id`, muestra su información y permite cambiar entre especificaciones y valoraciones mediante rutas anidadas.
5. `BookingForm.jsx` muestra el formulario de reserva y carga las ciudades desde `/api/locations`.

## Datos y API

La API está simulada con MirageJS en `src/api/server.js`. Los datos se crean en memoria al arrancar la app. Esto permite usar `fetch` de forma realista sin depender de servicios externos ni credenciales.

Endpoints usados:

- `/api/vans`: listado completo.
- `/api/vans/:id`: detalle de una van.
- <mark>`/api/locations`: ciudades para el formulario. ????</mark>

## Estado

La aplicación usa estado local y global según la necesidad:

- `useFetch` mantiene `data`, `loading` y `error` para peticiones.
- `FavoritesContext` mantiene la lista global de vans favoritas.
- `useSearchParams` guarda los filtros del catálogo en la URL.
- React Hook Form gestiona el estado del formulario y sus validaciones.

## Hooks personalizados

`useFetch` encapsula la lógica repetida de pedir datos, controlar carga y capturar errores. Se usa tanto para vans como para ciudades.

`useFavorites` encapsula el acceso a `FavoritesContext`, de modo que los componentes no importan el contexto directamente.

## Rutas

Las rutas principales se definen en `src/App.jsx`.

El detalle de van usa un `Outlet` para mostrar secciones internas:

- `specs`: ficha técnica.
- `ratings`: valoraciones.

Esto permite que una misma página mantenga su estructura principal mientras cambia el contenido secundario.

## Formulario de reserva

El formulario usa React Hook Form porque reduce código repetitivo en validaciones y evita gestionar manualmente cada campo con `useState`. Incluye campos de nombre, email, teléfono, fechas, ciudades y comentarios.

Las ciudades salen de la API mock, por lo que el formulario también demuestra consumo de datos.

## Componentes reutilizables

Algunos componentes clave son:

- `Layout`: estructura común con header, contenido y footer.
- `Header` y `Footer`: navegación y cierre de página.
- `VanCard`: tarjeta repetida en el catálogo.
- `Heart`: icono reusable para favoritos.
- `BookingForm`: formulario de reserva.

## Notas de revisión antes de entrega

- Ejecutar `npm run build`.
- Revisar la app en móvil, tablet y escritorio.
- Comprobar que las rutas importadas en `App.jsx` existen en la estructura final.
- Revisar que `index.html` no procese CSS generado dentro de `dist/` si causa errores de build.
