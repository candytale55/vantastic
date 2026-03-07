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
      <div>
        <button onClick={() => toggleFavorite(params.id)}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <h2>{vanElement.name} </h2>
        <img src={vanElement.imageUrl} alt={vanElement.name} />
        <div>
          <i>{vanElement.type}</i>
          <h3>{vanElement.name}</h3>
          <p>{vanElement.description}</p>
          <p><strong>Precio:</strong> €{vanElement.price} por día</p>
          <button className="cta">¡Alquila esta van!</button> 
        </div>
      </div>

      <nav className="van-detail-tabs">
        <NavLink
          to="specs" 
          className={({ isActive }) => isActive ? "active-tab" : null} 
          end
        >Specs</NavLink>

        <NavLink
          to="pictures"
          className={({ isActive }) => isActive ? "active-tab" : null}
          end
        >Photos</NavLink>
        
        <NavLink
          to="ratings"
          className={({ isActive }) => isActive ? "active-tab" : null}
          end
        >Valoraciones</NavLink>
      </nav>

      <div className="van-detail-tab-content">
        <Outlet />
      </div>

      <BookingForm />
      
    </>
  )
}
