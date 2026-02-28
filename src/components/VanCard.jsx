import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function VanCard(props) {

  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(props.van.id);

  /* console.log("Card received:", props.van); //TODO: Delete after testing is done */

  
  const handleFavorite = (event) => { 
    event.preventDefault(); 
    event.stopPropagation();  // Stops the click from "bubbling" up to the card link
    toggleFavorite(props.van.id);
    console.log("Favorited van ID:", props.van.id); // TODO: Remove once testing is done
   };
  
  return (
    <Link
      key={props.van.id}
      to={`/vans/${props.van.id}`}>
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
