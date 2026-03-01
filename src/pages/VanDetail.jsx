import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`);

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(params.id);
  console.log("isFavorite:", isFavorite); // TODO: Remove once you're done with testing

  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)

  const vanElement = data.van;

  return (
    <>
      <div>
        {/* //TODO: Move fav button to a better place */}
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

      <BookingForm />
      
    </>
  )
}
