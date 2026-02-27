import { Link } from 'react-router-dom'

export default function VanCard(props) {

  console.log("Card received:", props.van); //TODO: Delete after testing is done
  
  return (
    <Link key={props.van.id} to={`/vans/${props.van.id}`}>
      <div key={props.van.id}>
        <img src={props.van.imageUrl} alt={props.van.name} />
        <div>
          <h3>{props.van.name}</h3>
          <p>€{props.van.price}</p>
        </div>
        <i>{props.van.type}</i>
      </div>
    </Link>
  )
}
