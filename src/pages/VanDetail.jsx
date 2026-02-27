import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`);

  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)

  const vanElement = data.van;

  return (
    <>
      
      <h2>{vanElement.name}</h2>
      <img src={vanElement.imageUrl} alt={vanElement.name} />
      <div>
        <i>{vanElement.type}</i>
        <h3>{vanElement.name}</h3>
        <p>{vanElement.description}</p>
        <p><strong>Precio:</strong> €{vanElement.price} por día</p>
      </div>
      <button className="cta">Alquila esta van!</button>
    </>
  )
}
