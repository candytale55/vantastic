### 📋 Cumplimiento de Requisitos del Proyecto

| Requisito | Cómo se cumple en el proyecto | Ubicación (Archivo/s) |
| :--- | :--- | :--- |
| **Web FULL RESPONSIVE** | Uso de CSS moderno (Flexbox, Grid) y Media Queries para adaptar la navegación y el catálogo a dispositivos móviles y escritorio. | <mark>Todavía No - primero termino lo demás</mark> <br> Tailwind, Chakra y demás cuentan como CSS moderno, supongo |
| **Arquitectura útil y fácil de comprender** | Organización modular basada en carpetas por funcionalidad: `/api` (servicios), `/components` (UI), `/context` (estado global), `/hooks` (lógica) y `/pages` (vistas). | Estructura de carpetas en `/src` |
| **Mínimo de 3 páginas (react-router-dom)** | Implementación de rutas dinámicas y anidadas para: Inicio, Sobre nosotros, Catálogo y Detalle de furgoneta. | `App.jsx`, `main.jsx`, carpeta `/pages` |
| **Mínimo de 3 estados (con sentido)** | 1. `data` (datos de API), 2. `loading` (estado de carga), 3. `error` (gestión de fallos) y 4. `favorites` (lista global de favoritos). | `useFetch.jsx`, `FavoritesContext.jsx` |
| **Mínimo de un useEffect** | Sincronización con la API para realizar peticiones de datos de <mark>forma automática al montar los componentes</mark>. | `useFetch.jsx` |
| **Uso de alguna API** | Consumo de datos mediante un servidor mock configurado con **MirageJS** para simular una base de datos real de furgonetas. | `server.js`, `api.js` |
| **Formulario útil con useRef()** | Formulario de reserva de furgonetas que captura los datos del usuario de forma eficiente sin disparar re-renderizados constantes. | `BookingForm.jsx` |
| **Componentes reutilizables** | Componentes modulares como `VanCard` (usado en el catálogo) y `Layout` (plantilla de Header/Footer). | `VanCard.jsx`, `Layout.jsx` |
| **No re-renderizaciones innecesarias** | Uso de **`useRef`** en el formulario (componente no controlado) y lógica de filtrado derivada directamente de la URL (SearchParams). | `BookingForm.jsx`, `Vans.jsx` |
| **Uso de Custom Hooks** | Abstracción de lógica compleja en dos hooks personalizados: **`useFetch`** (peticiones HTTP) y **`useFavorites`** (acceso a contexto). | `useFetch.jsx`, `FavoritesContext.jsx` |
| **Uso de useContext** | Implementación de un **`FavoritesContext`** para gestionar la persistencia de las furgonetas favoritas en toda la aplicación. | `FavoritesContext.jsx`, `main.jsx` |