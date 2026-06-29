// Punto de entrada de React: monta la app, activa rutas y envuelve el estado global de favoritos.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Importing the Mirage server here makes the mock API available before any component fetches data.
import "/src/api/server.js"
import { FavoritesContextProvider } from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesContextProvider>
        <App />
      </FavoritesContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
