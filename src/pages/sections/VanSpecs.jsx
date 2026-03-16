import React from 'react'

export default function VanSpecs() {

  // Simulated hardcoded data for specs
  const specs = [
    { label: "Año de fabricación", value: "1982" },
    { label: "Motor", value: "1.9L Boxer, 60 CV" },
    { label: "Consumo medio", value: "9 L/100km" },
    { label: "Capacidad depósito", value: "60 Litros" },
    { label: "Transmisión", value: "Manual, 4 velocidades" },
    { label: "Plazas de viaje", value: "4" },
    { label: "Plazas de noche", value: "2 (cama doble)" },
    { label: "Equipamiento", value: "Cocina de gas, nevera portátil, fregadero, ducha exterior, panel solar, calefacción estática" },
    { label: "Dimensiones (L x An x Al)", value: "4.5m x 1.8m x 2.1m" },
    { label: "Aire acondicionado", value: "No (ventilador de techo)" },
    { label: "Extras", value: "Toldo lateral, mesa exterior, sillas de camping, menaje de cocina completo" },
  ];

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
      <p className="specs-note">Ten en cuenta que estas especificaciones son estándar. Las características exactas pueden variar ligeramente según la van.</p>
    </div>
  )
}
