import React from "react";
import './Doctor.scss';

export default function DoctorSelection({ doctors, onDoctorSelect }) {
  return (
    <div className="doctor-selection">
      <label>Chọn Nha sĩ:</label>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-item"
            onClick={() => onDoctorSelect(doctor.name)}
          >
            <div className="doctor-name">{doctor.name}</div>
            <div className="doctor-info">
              <span>{doctor.gender}</span> | <span>{doctor.specialty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
