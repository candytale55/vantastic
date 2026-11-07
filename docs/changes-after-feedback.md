# Changes Suggested by Professor's Feedback

## Feedback

![feedback.JPG File](./shots/feedback.JPG)

## Tabla de cambios 

# Cambios tras el feedback

Este documento recoge las mejoras aplicadas a partir del feedback recibido, junto con su objetivo y evidencia principal.

| Mejora | Objetivo | Cambios realizados | Evidencia |
| --- | --- | --- | --- |
| Loader de carga | Ofrecer una espera más clara y visual mientras se cargan los datos de la flota, el detalle de una furgoneta o las ciudades del formulario de reserva. | Se sustituyeron los mensajes planos de carga por un indicador reutilizable con estilo visual propio y estado accesible. Se añadió una demora temporal de 1,5 segundos para comprobar el estado de carga al navegar al catálogo, al detalle y al formulario. | `src/components/LoadingIndicator.jsx`, `src/components/BookingForm.jsx`, `src/pages/Vans.jsx`, `src/pages/VanDetail.jsx`, `src/hooks/useFetch.jsx`, `src/styles/layout.css` |
