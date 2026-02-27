import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans-error/${params.id}`);

  console.log("Current data state:", data); // TODO: Delete after tests are done.

  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)
  
  return (
    <>
      <h2>I am VanDetail</h2>
    </>
  )
}
