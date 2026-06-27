// Van detail page: loads one van, shows its main information, and switches
// between mobile tabs and a desktop two-column details layout.
import { useRef } from 'react'
import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useParams, Outlet, NavLink } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import Heart from '../components/Heart.jsx'
import NotFound from './NotFound.jsx'
import { VanSpecsContent } from './sections/VanSpecs.jsx'
import { VanRatingsContent } from './sections/VanRatings.jsx'

export default function VanDetail() {
  const params = useParams()
  const bookingSectionRef = useRef(null)
  const firstBookingInputRef = useRef(null)

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`)

  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(params.id)

  if (loading) return <h2>Cargando vans...</h2>
  if (error) return <h2>Hubo un error:{error}</h2>
  if (!data?.van) return <NotFound />

  const vanElement = data.van

  function handleBookingClick() {
    bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => {
      firstBookingInputRef.current?.focus()
    }, 350)
  }

  return (
    <main className="van-detail-page">
      <section className="van-overview section-shell">
        <h1 className="van-page-title">{vanElement.name}</h1>

        <div className="van-main-info">
          <div className="van-image-wrap">
            <img
              src={vanElement.imageUrl}
              alt={vanElement.name}
              className="van-detail-image"
            />

            <button
              type="button"
              className={`van-favorite-button ${isFavorite ? 'is-active' : ''}`}
              onClick={() => toggleFavorite(params.id)}
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Anadir a favoritos'}
              aria-pressed={isFavorite}
            >
              <Heart filled={isFavorite} />
            </button>
          </div>

          <div className="van-details-text">
            <span className={`van-type-badge type-${vanElement.type}`}>{vanElement.type}</span>
            <h2 className="van-detail-name">{vanElement.name}</h2>
            
            <p className="van-description">{vanElement.description}</p>
            
            <div className="van-price-row">
              <p className="van-price">
                <span className="sr-only">Precio: </span>
                &euro;{vanElement.price} por d&iacute;a
              </p>
              
            </div>

            <button
              type="button"
              className="cta-button book-van-cta"
              onClick={handleBookingClick}
              aria-label={`Ir al formulario para alquilar ${vanElement.name}`}
            >
              &iexcl;Reserva Ahora!
            </button>
          </div>
        </div>
      </section>

      <section className="van-detail-extra section-shell">
        <div className="van-detail-tabs-layout">
          <nav className="van-detail-tabs">
            <NavLink
              to="specs"
              end
              className={({ isActive }) =>
                `van-tab-link ${isActive ? 'is-active' : ''}`
              }
            >
              Specs
            </NavLink>

            <NavLink
              to="ratings"
              className={({ isActive }) =>
                `van-tab-link ${isActive ? 'is-active' : ''}`
              }
            >
              Valoraciones
            </NavLink>
          </nav>

          <div className="van-detail-tab-content">
            <Outlet
              context={{
                specs: vanElement.specs,
                ratings: vanElement.ratings,
              }}
            />
          </div>
        </div>

        <div className="van-detail-desktop-grid">
          <div className="van-detail-desktop-panel">
            <VanSpecsContent specs={vanElement.specs} />
          </div>

          <div className="van-detail-desktop-panel">
            <VanRatingsContent ratings={vanElement.ratings} />
          </div>
        </div>
      </section>

      <section className="van-booking-form-section section-shell" ref={bookingSectionRef}>
        <h2 className="booking-title">Reserva la {vanElement.name}</h2>
        <BookingForm firstInputRef={firstBookingInputRef} />
      </section>
    </main>
  )
}
