import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

export default function VanDetail() {
  // Extrae el parámetro "id" de la URL 
  const params = useParams();

  const { data, loading, error } = useFetch(`/api/vans/${params.id}`);

  console.log("Current data state:", data); // TODO: Delete after tests are done.

  /*
  Current data state: 
    {van: {…}}
    van
    : 
    {id: '2', name: 'Beach Bum', price: 80, description: 'Beach Bum es una van inspirada en surfistas y viaj… geniales que no encontrarás en una camper común.', imageUrl: 'https://images.unsplash.com/photo-1710707919147-bf41f37e5b00?&w=400&h=400&fit=crop', …}
    [[Prototype]]
    : 
    Object
   */



  
  return (
    <>
      <h2>I am VanDetail</h2>
    </>
  )
}
