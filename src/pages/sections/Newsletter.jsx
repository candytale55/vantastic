import React from 'react'

export default function Newsletter() {
    return (
      <section className="section" id="newsletter-section">
            <h2>I am Newsletter</h2>
            <button>CON</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error, distinctio cupiditate in suscipit eligendi aliquid dolore quos reprehenderit quibusdam consectetur facilis? Porro sit obcaecati, amet at eius similique fugit?</p>

            <form>
                <label htmlFor="newsletter-email" placeholder="tu dirección de correo"></label>
                <input type="mail" id="newsletter-email" />
                <button type="submit">Únete al Movimiento</button>
            </form>
      </section>
  )
}
