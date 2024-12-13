// ServiceSelection.js
import React from "react";
import './Service.scss'
export default function ServiceSelection({ services, onServiceSelect }) {
  return (
    <div className="service-selection">
      <label>Dịch vụ:</label>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-item"
            onClick={() => onServiceSelect(service.id)}
          >
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
}
