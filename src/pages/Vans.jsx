import useFetch from '../hooks/useFetch.jsx'
import { Link } from 'react-router-dom'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans-error");

  console.log("Current data state", data); //TODO: Remove after testing is over

  if (loading) {
    return <h2>Cargando vans...</h2>
  }


  if (error) {
    console.log("Hubo un error:", { error });
    return <h2>Hubo un error:{error}</h2>
  }

  return (
    <>
      <h2>Explora nuestros modelos</h2>
{/*       <div>{ vanElements}</div> */}
    </>
  )
}
