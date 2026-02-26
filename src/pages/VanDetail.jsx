import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  // Almacena los datos de la van (inicia undefined)
  const [vanElement, setVanElement] = useState();

  // Llama a la API de Mirage y guarda la van en el estado. Se ejecuta al montar el componente o cuando cambia params.id
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)  
      .then(res => res.json())
      .then(data => setVanElement(data.van))  // Mirage envuelve la respuesta en { van: {...} }
  }, [params.id]);

  // Muestra mensaje de carga mientras no haya datos (evitar error cuando vanElement aún es undefined)
  if (!vanElement) {
    return <h2>Cargando van ...</h2>
  }

  // Cargados los datos, renderiza el detalle de la van
  return (
    <div>
      <h2>{vanElement.name}</h2>
      <img src={vanElement.imageUrl} alt={vanElement.name} />
      <div>
        <h3>{vanElement.name}</h3>
        <p>{vanElement.description}</p>
        <p><strong>Precio:</strong> €{vanElement.price} por día</p>
      </div>
      <i>{vanElement.type}</i>
    </div>
  )
}
