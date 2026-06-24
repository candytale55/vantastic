// Van specs section: renders the technical details of a van and can be used
// both inside the route Outlet and directly in the desktop layout.
import { useOutletContext } from 'react-router-dom'

export function VanSpecsContent({ specs }) {
  return (
    <div className="van-specs-section">
      <h3 className="specs-title">Especificaciones Técnicas</h3>

      <ul className="specs-list">
        {specs.map((spec, index) => (
          <li key={index} className="specs-item">
            <span className="specs-label">{spec.label}</span>
            <span className="specs-value">{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function VanSpecs() {
  const { specs } = useOutletContext()

  return <VanSpecsContent specs={specs} />
}
