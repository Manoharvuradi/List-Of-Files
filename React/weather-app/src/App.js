import { useEffect, useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import pic from "./logo.png";
import React, { Component } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  // useEffect(() => {
  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79796469f91e682295d0bad6d8ae56ff`
      )
      .then((result) => {
        setData([result]);
      })
      .catch((error) => {
        console.log("something went wrong " + error);
      });
  };

  const handleData = () => {
    console.log("Hello");
    fetchData();
  };
  // }, [city]);

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={pic} alt="Logo" width="40px" height="40px" />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="search__input">
            <SearchIcon className="search__inputIcon" />
            <input
              type="text"
              name="city"
              placeholder="City Name"
              onChange={(event) => setCity(event.target.value)}
            />
            <MicIcon />

            <button type="submit" onClick={handleData}>
              Search
            </button>
          </div>
        </form>
      </div>
      {data !== "undefined" ? (
        <div>
          <Weather weatherData={data} />
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
