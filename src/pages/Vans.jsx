import useFetch from '../hooks/useFetch.jsx'
import VanCard from '../components/VanCard.jsx'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");

  if (loading) return <h2>Cargando vans...</h2>

  if (error) return <h2>Hubo un error:{error}</h2> //TODO: Improve error message styling (it sucks!)

  const vanElements = data.vans.map(van => {
    return <VanCard key={van.id} van={van} />
  })

  return (
    <>
      <h2>Explora nuestros modelos</h2>
      { vanElements}
    </>
  )
}
