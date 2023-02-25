import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import "./App.css";
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=79796469f91e682295d0bad6d8ae56ff`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(lat);
        });
    };

    fetchData();
  }, [lat, long]);
  return (
    <div className="App">
      {data !== "undefined" ? (
        <div>
          <Weather weatherData={data} />
          {/* <h1>Hello</h1>; */}
        </div>
      ) : (
        <div>
          <h1>Something went wrong!!!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
