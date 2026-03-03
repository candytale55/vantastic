import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useSearchParams } from 'react-router-dom'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const { favorites } = useFavorites();
  const favsFilter = searchParams.get("favs") === "true";

  // TODO:(1) imaginarme que es un backend gestionar en un coponente aparte. Le paso al componente que cree el loading y el error. 
  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)

  // A: Start with the full master list
  let filteredVans = data.vans;
  // TODO:(2) Este es el que estoy fitrando - Mapear en el return lo que devuelva la funcion en utils.js - PONER LOGICA DE TODOS LOS FILTROS - pasar todas la furgonetas y los filtros. -
  
  // B: Sieve through by TYPE (if a type is selected)
  if (typeFilter) {
    filteredVans = filteredVans.filter(van => van.type === typeFilter);
  }
  // TODO:(2) Extraer el typeFilter en un utils.js para gestionar los filtros. 

  // C: Sieve through by FAVORITES (if the user clicked the Favs toggle)
  if (favsFilter) {
    // We only keep the van if its ID exists in our 'favorites'
    filteredVans = filteredVans.filter(van => favorites.includes(van.id));
  }

  console.log("filteredVans:", filteredVans);


  // TODO:(2) Hacer el map en el return - aqui asigno lo que devuelve la utilidad
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
          {favsFilter ? "¡Todas!🤍" : "Solo Favs ❤️"} //TODO: Usar svgs o pngs - Ver opción en cumplimiento.md
        </button>
        {/* //TODO: See if this is needed vs Todas las Vans button*/}
        <button onClick={() => setSearchParams({})}>
          Reset Total 🧹
        </button>

      </div>
      { vanElements} {/* //TODO:(2) Aquí ira lo que devuelve la utilidad */}
    </>
  )
}
