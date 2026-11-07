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
| Formulario de reserva | Facilitar el mantenimiento del formulario y preservar una experiencia clara al completar la reserva. | `ContactFields` gestiona las validaciones de nombre, email y teléfono; `RentalFields`, las fechas, ciudades y comentarios; `BookingField`, las etiquetas y errores; y `BookingSuccessModal`, la confirmación. `BookingForm` coordina la petición de ciudades, el envío, el foco inicial y la relación entre fechas. | `src/components/BookingForm.jsx`, `src/components/booking/` |

## Por qué se divide el formulario

| Componente | Casuísticas que gestiona | Motivo de la separación |
| --- | --- | --- |
| `ContactFields` | Nombre obligatorio de 2 a 50 caracteres, email obligatorio con formato válido y teléfono obligatorio de 9 a 15 dígitos. | Agrupa los datos personales y mantiene sus reglas junto a los inputs que las necesitan. |
| `RentalFields` | Fechas obligatorias, recogida no anterior a hoy, entrega no anterior a la recogida, ciudades obligatorias y comentario con máximo de 300 caracteres. | Aísla las reglas de la reserva y deja visible la dependencia entre ambas fechas. |
| `BookingField` | Etiqueta y mensaje de error para cada control. | Elimina marcado repetido y garantiza una presentación homogénea de los errores. |
| `BookingSuccessModal` | Foco en el cierre, cierre por botón y mediante la tecla Escape. | Mantiene la confirmación accesible sin mezclar su interfaz con los datos del formulario. |
| `BookingForm` | Carga de ciudades, estado del formulario, envío, restablecimiento y devolución del foco. | Actúa solo como coordinador; por ello es más corto, legible y sencillo de extender sin modificar reglas ajenas. |
