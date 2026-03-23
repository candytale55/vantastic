import { Wrench, Map, CalendarClock } from 'lucide-react'
import { getYearsSince } from '../../utils/dateUtils.js'

export default function HomePromoThreeReasons() {

    /* //TODO: Move to a file that manage the bussiness data? */
    const startYear = 1989;
    const yearsInBusiness = getYearsSince(startYear);

    return (
        <section className="home-three-ideas section-shell" id="three-ideas">
            <h2 className="section-title">No es un alquiler. Es una forma de viajar.</h2>

            <div className="ideas-grid">
                <div className="idea-card">
                    <Wrench className="icon" />
                    <h3>Furgonetas restauradas a mano</h3>
                    <p>Cada furgoneta que ves aquí ha pasado por nuestro taller antes de pasar por tus manos. Motor, carrocería, interior. Nada se deja al azar. Todo se deja con carácter.</p>
                </div>
                <div className="idea-card">
                    <Map className="icon" />
                    <h3>Sin itinerario obligatorio</h3>
                    <p>Recoge en Barcelona. Devuelve en Lisboa. O en Bilbao. O donde te lleve la carretera. Nadie te va a preguntar por qué.</p>
                </div>
                <div className="idea-card">
                    <CalendarClock className="icon"/>
                    <h3>{yearsInBusiness} años en esto</h3>
                    <p>Abrimos en 1989 porque crecimos viajando por Europa en furgoneta y no sabíamos hacer otra cosa. Eso no se aprende en un curso. Se vive.</p>
                </div>
            </div>
        </section>
    )
}
