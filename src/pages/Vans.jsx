import useFetch from '../hooks/useFetch.jsx'
import { Link } from 'react-router-dom'


export default function Vans() {

  const { data, loading, error } = useFetch("/api/vans");

  console.log("Current data state", data);

  /*
  Current data state 
    {vans: Array(6)}
    vans
    : 
    (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    [[Prototype]]
    : 
    Object
  */



  return (
    <>
      <h2>Explora nuestros modelos</h2>
{/*       <div>{ vanElements}</div> */}
    </>
  )
}
