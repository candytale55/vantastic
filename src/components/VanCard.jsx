import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'
/* import { Heart } from 'lucide-react' */


export default function VanCard(props) {

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(props.van.id);

  
  const handleFavorite = (event) => { 
    event.preventDefault(); 
    event.stopPropagation();  // Stops the click from "bubbling" up to the card link
    toggleFavorite(props.van.id);
   };
  
  return (
    <Link
      key={props.van.id}
      to={`/vans/${props.van.id}`}>
      
{/*       <button onClick={handleFavorite}>{isFavorite ? <Heart className="heart-fill"/> : <Heart />}</button> */}

      <button onClick={handleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
      <div key={props.van.id}>
        <img src={props.van.imageUrl} alt={props.van.name} />
        <div>
          <h3>{props.van.name}</h3>
          <p>€{props.van.price}</p>
        </div>
        <i>{props.van.type}</i>
      </div>
    </Link>
  )
}
