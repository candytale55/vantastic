import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
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
