import React from "react";
import "./Weather.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
function Weather({ weatherData }) {
  console.log(weatherData);
  console.log(weatherData.Weather);
  return (
    <div className="wheather">
      {weatherData.map((details, index) => {
        return (
          <div key={index} className="container">
            <div className="box">
              <WbSunnyIcon />
            </div>
            {/* <div className="top">
              <div className="location">
                <h1>{details.data.name}</h1>
                <p>{details.data.sys.country}</p>
              </div>
              <div className="timezone">
                <p>{details.data.timezone}</p>
              </div>
            </div>
            <div className="temp">
              <p>{details.data.main.temp}</p>
            </div>
            <div className="bottom">
              <div className="feels">{details.data.main.feels_like}</div>
              <div className="humidity"></div>
              <div className="wind">
                <p>{details.data.wind.speed}</p>
                <p>{details.data.wind.deg}&deg;</p>
              </div>
              <div className="pressure">{details.data.main.pressure}</div>
              <div className="visibility">{details.data.visibility}</div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Weather;
