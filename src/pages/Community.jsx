import { Link } from 'react-router-dom'

export default function Community() {
    return (
        <main className="community-page-main">
            <h1>En Carretera</h1>
            <p>Aquí vivirá nuestra comunidad de viajeros. ¡Próximamente!</p>
            <Link to="/" className="cta-button-medium">Volver al inicio</Link>
        </main>
    )
}
