import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useSearchParams } from 'react-router-dom'
import { getFilteredVans } from '../utils/filters.js'


export default function Vans() {


  const { data, loading, error } = useFetch("/api/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const { favorites } = useFavorites();
  const favsFilter = searchParams.get("favs") === "true";

  // TODO:(2) imaginarme que es un backend gestionar en un coponente aparte. Le paso al componente que cree el loading y el error. 
  
  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)


  // Use the utility function to get filtered vans
  const filteredVans = getFilteredVans(data.vans, typeFilter, favsFilter, favorites);


  // TODO:(1) Hacer el map en el return - aqui asigno lo que devuelve la utilidad
  const vanElements = filteredVans.map(van => {
    return <VanCard key={van.id} van={van} />
  })

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    })
  }

  return (
    <>
      <h2>Explora nuestros modelos</h2>
      {/* Botones para filtrar por tipo */}
      <div>
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className="">
          Simple
        </button>
        <button
          onClick={ () => handleFilterChange( "type", "rugged")} 
          className=""
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className=""
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("favs", favsFilter ? null : "true")}
          className=""
        >
          {favsFilter ? "¡Todas!🤍" : "Solo Favs ❤️"}
        </button>
        {/* //TODO: See if this is needed vs Todas las Vans button*/}
        <button onClick={() => setSearchParams({})}>
          Reset Total 🧹
        </button>

      </div>
      { vanElements}
    </>
  )
}
