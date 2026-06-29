// Tarjeta reutilizable del catalogo: presenta una van y permite entrar al detalle o marcar favorito.
import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'
import Heart from '../components/Heart.jsx'


export default function VanCard(props) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(props.van.id)

  const handleFavorite = () => {
    toggleFavorite(props.van.id)
  }

  return (
    <article className="van-card-container">
      <div className="van-card-image-wrap">
        <Link
          to={`/vans/${props.van.id}`}
          className="van-card-image-link"
          aria-label={`Ver detalles de ${props.van.name}`}>
          <img
            src={props.van.imageUrl}
            alt={props.van.name}
            className="van-card-image" />
        </Link>

        <button
          type="button"
          onClick={handleFavorite}
          className={`van-card-favorite-button ${isFavorite ? 'is-active' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}>
          <Heart filled={isFavorite} />
        </button>
      </div>

      <Link
        to={`/vans/${props.van.id}`}
        className="van-card-body">
        <h3 className="van-card-title">{props.van.name}</h3>

        <div className="van-card-meta">
          <p className="van-card-price">&euro;{props.van.price} <span>por d&iacute;a</span></p>
          <span className={`van-card-type type-${props.van.type}`}>{props.van.type}</span>
        </div>
      </Link>
    </article>
  )
}
