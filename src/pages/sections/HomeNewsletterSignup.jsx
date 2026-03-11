import { Share2 } from 'lucide-react';

export default function HomeNewsletterSignup() {
    return (
        <section className="section" id="newsletter-section">
            <h2>I am Newsletter</h2>
            <Share2 />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error, distinctio cupiditate in suscipit eligendi aliquid dolore quos reprehenderit quibusdam consectetur facilis? Porro sit obcaecati, amet at eius similique fugit?</p>

            <form>
                <label htmlFor="newsletter-email" placeholder="tu dirección de correo"></label>
                <input type="mail" id="newsletter-email" />
                <button type="submit">Únete al Movimiento</button>
            </form>
        </section>
    )
}
