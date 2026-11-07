# Changes Suggested by Professor's Feedback

## Feedback

![feedback.JPG File](./shots/feedback.JPG)

## Tabla de cambios 

# Cambios tras el feedback

Este documento recoge las mejoras aplicadas a partir del feedback recibido, junto con su objetivo y evidencia principal.

| Mejora | Objetivo | Cambios realizados | Evidencia |
| --- | --- | --- | --- |
| Loader de carga | Ofrecer una espera más clara y visual mientras se cargan los datos de la flota, el detalle de una furgoneta o las ciudades del formulario de reserva. | Se sustituyeron los mensajes planos de carga por un indicador reutilizable con estilo visual propio y estado accesible. La demora temporal empleada para probarlo se eliminó antes de finalizar la mejora. | `src/components/LoadingIndicator.jsx`, `src/components/BookingForm.jsx`, `src/pages/Vans.jsx`, `src/pages/VanDetail.jsx`, `src/styles/layout.css` |
| Imágenes públicas | Acceder a las imágenes estáticas mediante rutas públicas, sin imports ni rutas relativas desde los componentes. | Se trasladaron los recursos de `src/assets/images` a `public/images` y se actualizaron las secciones de inicio para usar rutas directas `/images/...`. | `public/images/`, `src/pages/sections/HomeAboutUs.jsx`, `src/pages/sections/HomeGaleria.jsx`, `src/pages/sections/HomeHero.jsx` |
