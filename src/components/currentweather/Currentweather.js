import './currentweather.css'
import React from 'react'

const Currentweather = ({ data }) => {
  if (!data || !data.weatherResponse) return null;

  const { city, weatherResponse } = data;
  const { weather, main, wind } = weatherResponse;

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="desc">{weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weather[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(main.temp - 273.15)}&deg;C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(main.feels_like - 273.15)}&deg;C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
