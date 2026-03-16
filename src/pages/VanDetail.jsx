import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useParams, Outlet, NavLink } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`);

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(params.id);

  if (loading) return <h2>Cargando vans...</h2>
  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling 

  const vanElement = data.van;

  //TODO: (3) Move fav button to a better place - Replace heart emoji by SVG (see cumplimiento.md)

  return (
    <>
      <main className="van-detail-page-main">
        <section className="van-overview-section">

          <div className="van-header-actions">
            <h1>{vanElement.name}</h1>
            <button onClick={() => toggleFavorite(params.id)}>
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>

          <div className="van-main-info">
            <img src={vanElement.imageUrl} alt={vanElement.name} />
            <div className="van-details-text">
              <i className="van-type-badge">{vanElement.type}</i>
              <h2>{vanElement.name}</h2>
              <p className="van-description">{vanElement.description}</p>
              <p className="van-price"><strong>Precio:</strong> €{vanElement.price} por día</p>
              <button className="cta-button-large book-van-cta">¡Alquila esta van!</button>
            </div>
          </div>

        </section>
      </main>


      <nav className="van-detail-tabs">
        <NavLink
          to="specs"
          end
        >Specs</NavLink>

        <NavLink
          to="pictures"
        >Photos</NavLink>

        <NavLink
          to="ratings"
        >Valoraciones</NavLink>
      </nav>

      <div className="van-detail-tab-content">
        <Outlet context={{ specs: vanElement.specs, ratings: vanElement.ratings }} />
      </div>

      {/* //TODO: Where do I put Booking. Over the outlet or here?  */}

      <section className="van-booking-form-section">
        <h2>Reserva la {vanElement.name}</h2>
        <BookingForm />
      </section>

    </>
  )
}
