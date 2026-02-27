import useFetch from '../hooks/useFetch.jsx'
import { Link } from 'react-router-dom'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");

  console.log("Current data state", data); //TODO: Remove after testing is over

  if (loading) {
    return <h2>Cargando vans...</h2>
  }


  if (error) {
    console.log("Hubo un error:", { error }); // TODO: Remove after testing is over 
    return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)
  }

  const vanElements = data.vans.map(van => {
    return <Link key={van.id} to={`/vans/${van.id}`}>
      <div key={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div>
          <h3>{van.name}</h3>
          <p>€{van.price}</p>
        </div>
        <i>{van.type}</i>
      </div>
    </Link>
  })

  return (
    <>
      <h2>Explora nuestros modelos</h2>
      <div>{ vanElements}</div>
    </>
  )
}
