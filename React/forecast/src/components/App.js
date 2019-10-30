import React, { useState, useEffect } from "react";
import Current from "./Current";
import Forecast from "./Forecast";

const App = () => {
  const APPID = "d2ec834185efad855ddb187e9b95c15b";
  const [current, setcurrent] = useState(null);
  const [forecast, setforecast] = useState(null);
  const getLocation = () => {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getTemp = async () => {};
  const getHourlyTemp = async () => {};

  const getAll = async () => {
    try {
      const { coords } = await getLocation();
      await getTemp(coords);
      await getHourlyTemp(coords);
    } catch (error) {
      alert("Please Tell me your location");
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <header>
        <h1>Forecast</h1>
      </header>
      <main>
        <Current />
        <Forecast />
      </main>
    </>
  );
};

export default App;
