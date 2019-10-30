import React from "react";
import StateIcon from "./StateIcon";

const Current = () => {
  return (
    <>
      <section>
        <h1>Current Position</h1>
        <article>
          <time>Observation Time</time>
          <p>Weather State</p>
        </article>
      </section>
      <section>
        <article>
          <StateIcon />
          <p>Temperature</p>
          <section>
            <span>C</span>
            <span>F</span>
          </section>
        </article>
        <article>
          <p>Precipitation</p>
          <p>Snowfall</p>
          <p>Humidity</p>
          <p>Wind speed</p>
        </article>
      </section>
    </>
  );
};

export default Current;
