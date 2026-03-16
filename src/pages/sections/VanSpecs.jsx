import { useOutletContext } from 'react-router-dom'

export default function VanSpecs() {

  const { specs } = useOutletContext();

  return (
    <div className="van-specs-section">
      <h3>Especificaciones Técnicas</h3>
      <ul className="specs-list">
        {specs.map((spec, index) => (
          <li key={index} className="specs-item">
            <span className="specs-label">{spec.label}:</span>
            <span className="specs-value">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
