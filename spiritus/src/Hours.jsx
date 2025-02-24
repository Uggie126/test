import React from "react";
import "./Hours.css"

const Hours = () => {
    const hours = [
      { day: "Sunday - Monday", time: "Closed" },
      { day: "Tuesday - Saturday", time: "5 PM - 1 AM" }
    ];
  
    return (
      <div className="opening-hours">
        <p>Opening Hours</p>
        <ul>
          {hours.map((hour, index) => (
            <li key={index} className="opening-hours-item">
              <span className="day">{hour.day}</span>
              <span className="time">{hour.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Hours;