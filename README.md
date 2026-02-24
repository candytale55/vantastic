# Vantastic! 🚐

## Project Overview / Resumen del proyecto

**EN:** Vantastic! is a Single Page Application (SPA) designed to connect travelers with their ideal camper van. Users can browse a diverse fleet, check technical specifications, save favorites, and move toward booking with a clear, frictionless experience.

**ES:** Vantastic! es una Single Page Application (SPA) orientada a conectar viajeros con su furgoneta camper ideal. La app permite explorar una flota diversa, consultar especificaciones técnicas, guardar favoritos y avanzar hacia la reserva con una experiencia clara y sin fricción.

## Architecture / Arquitectura

**EN:** The app is built with React using a modular and scalable structure, ready for future growth (for example, authentication and user account management).

**ES:** La aplicación está desarrollada con React siguiendo una estructura modular y escalable, preparada para futuras ampliaciones (por ejemplo, autenticación y gestión de usuarios).

### Main Routes / Rutas principales

- **Home**: welcome page and value proposition.
- **Vans**: fleet gallery with category filters (Simple, Luxury, Rugged).
- **Van Detail**: per-vehicle page with technical details, favorites management, and booking form.

### Data, State and UX / Datos, estado y UX

- API communication is organized in dedicated services.
- A custom `useFetch` hook handles loading, error, and async states consistently.
- `FavoritesContext` (with `useContext`) keeps favorite vans available across views.
- The booking form uses `useRef` to avoid unnecessary re-renders while typing.
- The UI is fully responsive using modern CSS (Grid + Flexbox).

## Tech Stack

- React 19
- Vite 7
- ESLint 9

## Getting Started / Puesta en marcha

### 1) Prerequisites / Requisitos previos

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### 2) Install dependencies / Instalar dependencias

```bash
npm install
```

### 3) Start development server / Iniciar servidor de desarrollo

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).  
Después, abre la URL local que aparece en terminal (normalmente `http://localhost:5173`).

### 4) Lint / Ejecutar linter

```bash
npm run lint
```

### 5) Production build / Build de producción

```bash
npm run build
```

### 6) Preview production build / Previsualizar build

```bash
npm run preview
```

## Available Scripts / Scripts disponibles

- `npm run dev` → start Vite dev server.
- `npm run build` → create optimized production build.
- `npm run lint` → run ESLint checks.
- `npm run preview` → preview the production build locally.


