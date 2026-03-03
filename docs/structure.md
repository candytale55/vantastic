# Project Structure

```bash
src/
 ├── api/                  # Lógica de comunicación con la API (fetch)
 │    └── server.js        # Mock server / funciones para obtener datos
 ├── assets/               # Archivos estáticos (imágenes, iconos, logo)
 │    └── images/
 ├── components/           # Componentes reutilizables (UI)
 │    ├── BookingForm.jsx  # Formulario de reserva
 │    ├── Footer.jsx       # El pie de página
 │    ├── Header.jsx       # El Navbar con el logo de Vantastic!
 │    ├── Layout.jsx       # Componente estructural que usa <Outlet />
 │    └── VanCard.jsx      # La "tarjeta" que se repite en el listado
 ├── context/              # Gestión del estado global
 │    └── FavoritesContext.jsx
 ├── hooks/                # Hooks personalizados
 │    └── useFetch.jsx     # Hook para manejar estados de carga y error
 ├── pages/                # Componentes que representan rutas completas
 │    ├── About.jsx        # Página "Sobre nosotros"
 │    ├── Home.jsx         # Página principal
 │    ├── NotFound.jsx     # Página 404
 │    ├── VanDetail.jsx    # Página de detalle + Formulario de reserva
 │    └── Vans.jsx         # Página de listado
 ├── App.css               # Estilos específicos y Media Queries
 ├── App.jsx               # Configuración de Rutas (react-router-dom)
 ├── index.css             # Estilos globales
 └── main.jsx              # Punto de entrada (donde envuelves con el Provider)
```
