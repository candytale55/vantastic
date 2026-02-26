import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Vans() {

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans));
  }, []);

  const vanElements = vans.map(van => 
    <Link key={van.id} to={`/vans/${van.id}`}>
      <div key={van.id}>
        <img src={van.imageUrl} alt={van.name} />
        <div>
          <h3>{van.name}</h3>
          <p>€{van.price}</p>
        </div>
        <i>{van.type}</i>
      </div>
    </Link>
    
  );

  return (
    <>
      <h2>Explora nuestros modelos</h2>
      <div>{ vanElements}</div>
    </>
  )
}
