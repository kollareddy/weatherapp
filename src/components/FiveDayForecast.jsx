import React from "react";

function FiveDayForecast({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast-container">
      {forecast.map((day, index) => (
        <div key={index}className="forecast-item">
          <p>
            {" "}
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <p>{day.main.temp.toFixed()}°F</p>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForecast;