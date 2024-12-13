import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './LichHen.scss';
const LichHen = () => {
  const [appointments, setAppointments] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }

    const storedServicesData = localStorage.getItem("ServicesData");
    if (storedServicesData) {
      setServicesData(JSON.parse(storedServicesData));
    }

    const storedDoctorsData = localStorage.getItem("DoctorsData");
    if (storedDoctorsData) {
      setDoctorsData(JSON.parse(storedDoctorsData));
    }
  }, []);

  const getServiceNameById = (serviceId) => {
    const service = servicesData.find((service) => service.id === serviceId);
    return service ? service.name : "Dịch vụ không xác định";
  };

  const handleDelete = (appointmentId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  if (appointments.length === 0) {
    return (
      <div className="lich-hen">
        <h2>Lịch hẹn của bạn</h2>
        <p>Không có lịch hẹn nào.</p>
      </div>
    );
  }

  return (
    <div className="lich-hen">
      <h2>Lịch hẹn của bạn</h2>
      {appointments.map((appointment, index) => (
        <div key={index} className="appointment">
          <p><strong>Dịch vụ:</strong> {getServiceNameById(appointment.selectedService)}</p>
          <p><strong>Bác sĩ:</strong> {appointment.selectedDoctor}</p>
          <p><strong>Ngày:</strong> {appointment.selectedDate}</p>
          <p><strong>Thời gian:</strong> {appointment.selectedTime}</p>
          <div className="buttons">
            <Link to={`/sualich/${appointment.id}`} className="edit-button">Sửa</Link>
            <button
              onClick={() => handleDelete(appointment.id)}
              className="delete-button"
            >
              Hủy Lịch Hẹn
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LichHen;
