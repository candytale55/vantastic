# Vantastic!

Vantastic! es una SPA desarrollada con React para consultar y reservar furgonetas camper de estilo vintage. El usuario puede navegar por la flota, filtrar por tipo de vehículo, guardar favoritos, consultar el detalle de cada van y completar un formulario de reserva.

Este repositorio forma parte del proyecto de React del Máster en FullStack Development.

## Documentación principal

- [Justificación de requisitos](./docs/justificación-requisitos.md): relación entre los requisitos del proyecto y su implementación.
- [Notas de desarrollo](./docs/dev-notes.md): explicación técnica de la integración, arquitectura y decisiones principales.

## Quick Start

Requisitos previos:

- Node.js 18 o superior.
- npm.

Instalación:

```bash
npm install
```

Servidor de desarrollo:

```bash
npm run dev
```

Después abre la URL local que indique la terminal, normalmente `http://localhost:5173`.

Comandos útiles:

```bash
npm run build
npm run preview
```

## Stack técnico

- React 19
- Vite 7
- React Router DOM 7
- React Hook Form
- MirageJS para simular la API local
- Tailwind CSS y CSS propio
- Lucide React para iconos
- ESLint

## Funcionalidad principal

- Página de inicio con presentación del proyecto.
- Catálogo de vans con filtros por tipo y favoritos.
- Página de detalle por van con rutas anidadas para especificaciones y valoraciones.
- Formulario de reserva con validación.
- Estado global de favoritos mediante Context API.
- Carga de datos desde una API mock con MirageJS.

## Estructura general

```text
src/
|-- api/          # Servidor MirageJS y datos mock
|-- components/   # Componentes reutilizables
|-- context/      # Estado global de favoritos
|-- hooks/        # Hooks personalizados
|-- pages/        # Vistas principales y secciones
|-- utils/        # Funciones auxiliares
|-- App.jsx       # Definición de rutas
`-- main.jsx      # Punto de entrada de React
```

## Estado de revisión

La documentación se ha preparado para explicar el estado actual del proyecto. Antes de la entrega final conviene ejecutar `npm run build` y revisar cualquier ajuste pendiente indicado por Vite o ESLint.
