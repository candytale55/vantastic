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

## Refactor de TailWind y Eliminación de Eslint, lint y pmp.yaml

Nota adicional sobre limpieza de estilos y configuración

Durante la revisión final del proyecto se hizo una limpieza progresiva de la configuración de estilos para dejar el proyecto más claro, pequeño y fácil de evaluar con Codex.

El proyecto quedó configurado como una aplicación React + Vite + Tailwind CSS 3. Se revisó la conexión entre `tailwind.config.js`, `src/index.css`, los componentes React y las clases utilitarias de Tailwind. También se corrigieron problemas derivados de una refactorización previa hacia Tailwind, especialmente clases personalizadas que Tailwind no reconocía porque todavía no estaban bien declaradas en la configuración.

Se movieron los valores principales de diseño, como colores y fuentes, a `tailwind.config.js`, para poder usarlos como clases de Tailwind con nombres claros. Después se limpiaron reglas CSS globales que estaban afectando demasiado a toda la aplicación, como alineaciones generales de headings, listas y enlaces. En su lugar, los estilos se fueron dejando más cerca de los componentes que realmente los necesitan.

También se revisó el uso de archivos antiguos. Los archivos dentro de `docs/old` se conservaron como referencia histórica, pero se dejaron fuera del flujo activo de la app para mantener el proyecto pequeño y enfocado en los requisitos de entrega.

Finalmente, se eliminó ESLint porque no era necesario para este proyecto ni para la calificación. Se quitó el script `lint`, las dependencias relacionadas con ESLint, el archivo `eslint.config.js` y el lockfile de pnpm. El proyecto quedó usando solo npm, con `package-lock.json` como único lockfile.

Verificación realizada:

- `npm run build` funciona correctamente.
- Tailwind compila sin errores.
- La configuración activa del proyecto ya no depende de ESLint.
- El proyecto queda como npm-only.
- Las únicas menciones restantes a ESLint están en archivos antiguos dentro de `docs/old`, conservados solo como documentación histórica.

Esta limpieza se hizo con el objetivo de que el proyecto sea más sencillo de revisar, más coherente con Tailwind CSS 3 y más adecuado para una entrega académica.