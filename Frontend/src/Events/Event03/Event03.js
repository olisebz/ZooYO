// Event03.js
import React from "react";
import "./Event03.css"; // Stellen Sie sicher, dass Sie die richtige CSS-Datei importieren

const BookingTimeBox = ({ time }) => {
  return (
    <div className="booking-time-box">
      <p>{time}</p>
      <button>Buchen</button>
    </div>
  );
};

const Event03 = () => {
  return (
    <div>
      <h1>Tiere füttern mit Senioren</h1>
      
      <div className="booking-day">
        <h2>Montag, Dienstag:</h2>
        <BookingTimeBox time="10:00-12:00" />
        <BookingTimeBox time="14:00-16:00" />
        <BookingTimeBox time="17:00-19:00" />
      </div>

      <div className="booking-day">
        <h2>Donnerstag, Freitag:</h2>
        <BookingTimeBox time="09:00-11:00" />
        <BookingTimeBox time="13:00-15:00" />
        <BookingTimeBox time="17:00-19:00" />
      </div>

      <div className="booking-day">
        <h2>Samstag, Sonntag:</h2>
        <BookingTimeBox time="11:00-13:00" />
        <BookingTimeBox time="14:00-16:00" />
        <BookingTimeBox time="18:00-20:00" />
      </div>
    </div>
  );
};

export default Event03;
