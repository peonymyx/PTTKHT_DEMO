import React, { useState } from "react";

export default function TimeSelection({ timeSlots, onTimeSelect }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onTimeSelect(time); // Gọi hàm callback từ component cha
  };

  return (
    <div className="time-selection">
      <label>Khung giờ:</label>
      <div className="time-list">
        {timeSlots.length > 0 ? (
          timeSlots.map((time) => (
            <div
              key={time}
              className={`time-item ${selectedTime === time ? "selected" : ""}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </div>
          ))
        ) : (
          <div className="no-slots">Không có khung giờ nào khả dụng cho ngày này.</div>
        )}
      </div>
    </div>
  );
}
