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


## Maybes

- Si más adelante quieres que cada página tenga su propio título SEO (por ejemplo, que en el detalle de una furgoneta el título sea "Alquiler de furgoneta Modest Explorer"), podrías investigar una librería llamada React Helmet. 

## TODOs / Technical Debt

- [Inconsistent 404](./personal-notes/issue-inconsistent-404.md) page in VanDetails
- (1 en Vans) Change emoji heart in Vans.jsx and VanDetails.jsx for SVGs or PNGs. Maybe:
    
    ```html
        <button class="fav-btn" aria-label="Add to favorites">
        <svg class="heart-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        </button>
    ```

    ```css
        .fav-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        color: #555; /* Default outline color */
        transition: all 0.2s ease;
        }

        /* Hover state - slightly darker */
        .fav-btn:hover {
        color: #e74c3c;
        transform: scale(1.1);
        }

        /* Active/Favorited state - filled red */
        .fav-btn.is-active {
        color: #e74c3c;
        fill: #e74c3c;
        }
    ```
    ```js
        const favBtn = document.querySelector('.fav-btn');

        favBtn.addEventListener('click', () => {
        favBtn.classList.toggle('is-active');
        });
    ```
- Hacer un utils.js con una función que realice los filtros por _type_ y otros 
- Hacer un componente que maneje el loading y la carga ()
- React Router Hash Link para manejar los saltos internos en la página Home, o rediseñar la lógica del Navbar?
- Rutas relativas => paths ?