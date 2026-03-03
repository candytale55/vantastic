import { useFavorites } from '../context/FavoritesContext.jsx'
import getFetch from '../hooks/useFetch.jsx'

export default function FavoriteVans() {

    const { data, loading, error } = getFetch("api/vans");
    console.log("data:", data); // TODO: Delete after testing

  return (
    <h2>I am FavoriteVans</h2>
  )
}
