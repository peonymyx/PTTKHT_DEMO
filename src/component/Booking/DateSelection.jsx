// DateSelection.js
import React from "react";
import Calendar from "./Calendar";

export default function DateSelection({ availableDates, onDateSelect }) {
  return (
    <div className="date-selection">
      <label>Chọn ngày:</label>
      <Calendar availableDates={availableDates} onDateSelect={onDateSelect} />
    </div>
  );
}
