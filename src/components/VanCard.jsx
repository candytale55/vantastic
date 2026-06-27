import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'
import Heart from '../components/Heart.jsx'


export default function VanCard(props) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.includes(props.van.id)

  const handleFavorite = (event) => {
    event.preventDefault()
    event.stopPropagation()
    toggleFavorite(props.van.id)
  }

  return (
    <Link
      key={props.van.id}
      to={`/vans/${props.van.id}`}
      className="van-card-container">
      <div className="van-card-image-wrap">
        <img
          src={props.van.imageUrl}
          alt={props.van.name}
          className="van-card-image" />

        <button
          onClick={handleFavorite}
          className={`van-card-favorite-button ${isFavorite ? 'is-active' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
          <Heart filled={isFavorite} />
        </button>
      </div>

      <div className="van-card-body">
        <h3 className="van-card-title">{props.van.name}</h3>

        <div className="van-card-meta">
          <p className="van-card-price">&euro;{props.van.price} <span>por d&iacute;a</span></p>
          <span className={`van-card-type type-${props.van.type}`}>{props.van.type}</span>
        </div>
      </div>
    </Link>
  )
}
