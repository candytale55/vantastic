import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'
import { useSearchParams } from 'react-router-dom'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log("typeFilter:", typeFilter); // TODO: Remove once testing is done.

  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)

  const vanElements = data.vans.map(van => {
    return <VanCard key={van.id} van={van} />
  })

  return (
    <>
      <h2>Explora nuestros modelos</h2>

      {/* Botones para filtrar por tipo */}
      {/* //TODO: Revisar si usar botones en lugar de links es lo más adecuado - Esto aplica en React? Mejor usar Links para evitar el onClick */}
      <div>
        <button
          onClick={() => setSearchParams({ type: "simple"})}
          className=""
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className=""
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className=""
        >
          Luxury
        </button>
        <button
          onClick={() => console.log("button Favoritas clicked")}
          className=""
        >
          Favs ❤️
        </button>
        <button
          onClick={() => setSearchParams({})}
          className=""
        >
          ¡Todas!
        </button>
      </div>
      

      { vanElements}
    </>
  )
}
