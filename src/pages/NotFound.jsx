import { Link } from 'react-router-dom'

// TODO: Etiquetas semánticas
export default function NotFound() {
  return (
    <div>
      <h2>404. Esta página no existe</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
