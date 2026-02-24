
# Initial project structure

```bash
I'm following this structure:  
src/
 ├── api/              # Lógica de comunicación con la API (fetch)
 │    └── vansApi.js   # Funciones para obtener los datos de las furgonetas
 ├── assets/           # Archivos estáticos (imágenes, iconos, logo)
 │    └── images/
 ├── components/       # Componentes reutilizables (UI)
 │    ├── Header.jsx   # El Navbar con el logo de Vantastic!
 │    ├── Footer.jsx   # El pie de página
 │    ├── Layout.jsx   # Componente estructural que usa <Outlet />
 │    └── VanCard.jsx  # La "tarjeta" que se repite en el listado
 ├── context/          # Gestión del estado global
 │    └── FavoritesContext.jsx
 ├── hooks/            # Tus ganchos personalizados
 │    └── useFetch.js  # El hook para manejar estados de carga y error
 ├── pages/            # Componentes que representan rutas completas
 │    ├── Home.jsx
 │    ├── Vans.jsx     # Página de listado
 │    └── VanDetail.jsx # Página de detalle + Formulario de reserva
 ├── styles/           # Archivos de CSS (Responsive)
 │    ├── index.css    # Estilos globales
 │    └── App.css      # Estilos específicos y Media Queries
 ├── App.jsx           # Configuración de Rutas (react-router-dom)
 └── main.jsx          # Punto de entrada (donde envuelves con el Provider)
 ```