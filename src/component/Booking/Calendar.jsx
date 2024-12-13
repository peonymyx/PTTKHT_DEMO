import React, { useState } from "react";
import dayjs from "dayjs";
import './Calender.scss';

export default function Calendar({ availableDates, onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const month = currentDate.month();
  const year = currentDate.year();
  const daysInMonth = currentDate.daysInMonth();
  const firstDay = currentDate.date(1).day(); // Xác định ngày đầu tháng (Sunday = 0)

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(currentDate.date(i).format('YYYY-MM-DD'));
  }

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button type="button" onClick={handlePreviousMonth} className="month-nav">
          &lt;
        </button>
        <span>{currentDate.format("MMMM YYYY")}</span>
        <button type="button" onClick={handleNextMonth} className="month-nav">
           &gt;
        </button>
      </div>
      <div className="calendar-grid">
        {/* Tên các ngày trong tuần */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}

        {/* Các ô trống cho các ngày trước ngày 1 */}
        {Array(firstDay).fill(null).map((_, index) => (
          <div key={index} className="calendar-day empty"></div>
        ))}

        {/* Các ngày trong tháng */}
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${availableDates.includes(day) ? "available" : ""}`}
            onClick={() => onDateSelect(day)}
          >
            {dayjs(day).date()}
          </div>
        ))}
      </div>
    </div>
  );
}
