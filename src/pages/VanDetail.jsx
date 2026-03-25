import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useParams, Outlet, NavLink } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import Heart from '../components/Heart.jsx'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`);

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(params.id);

  if (loading) return <h2>Cargando vans...</h2>
  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling 

  const vanElement = data.van;

  return (
    <main className="van-detail-page">
      <section className="van-overview section-shell">
        <div className="van-header-actions">
          <h1 className="van-page-title">{vanElement.name}</h1>

          <button
            type="button"
            className={`van-favorite-button ${isFavorite ? 'is-active' : ''}`}
            onClick={() => toggleFavorite(params.id)}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          >
            <Heart filled={isFavorite} />
          </button>
        </div>

        <div className="van-main-info">
          <div className="van-image-wrap">
            <img
              src={vanElement.imageUrl}
              alt={vanElement.name}
              className="van-detail-image"
            />
          </div>

          <div className="van-details-text">
            <i className="van-type-badge">{vanElement.type}</i>
            <h2 className="van-detail-name">{vanElement.name}</h2>
            <p className="van-description">{vanElement.description}</p>
            <p className="van-price">
              <strong>Precio:</strong> €{vanElement.price} por día
            </p>
            <button className="cta-button-large book-van-cta">
              ¡Alquila esta van!
            </button>
          </div>
        </div>
      </section>

      <section className="van-detail-extra section-shell">
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
      </section>

      <section className="van-booking-form-section section-shell">
        <h2 className="booking-title">Reserva la {vanElement.name}</h2>
        <BookingForm />
      </section>
    </main>
  )
}
