import React, { useState, useEffect } from "react";
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import "./App.css";

const App = () => {
  const APPID = "d2ec834185efad855ddb187e9b95c15b";
  const [current, setcurrent] = useState(null);
  const [forecast, setforecast] = useState(null);

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async coords => {
    const { latitude: lat, longitude: lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;
    const res = await Axios.get(url);
    const { data } = res;
    setcurrent(data);
  };

  const getHourlyTemp = async () => {};

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch (error) {
      alert("Please tell me your location");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header className="header-padding">
        <h1>Forecast</h1>
      </header>
      <main className="container">
        {!current ? <Spinner /> : <Current current={current} />}
        <Forecast />
      </main>
    </>
  );
};

export default App;
