import React from "react";
import "./Forecast.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Forecast = ({ forecast, unit }) => {
  const cut = forecast.list.slice(0, 10);
  const getHoursName = h => {
    return h > 12 ? `오후 ${h - 12}시` : `오전 ${h}시`;
  };

  const data = cut.map(e => {
    return {
      time: `${getHoursName(new Date(e.dt * 1000).getHours())}`,
      temperature:
        unit === "c"
          ? Math.round(e.main.temp)
          : Math.round((e.main.temp * 9) / 5 + 32)
    };
  });

  return (
    <div className="forecast">
      <LineChart width={500} height={200} data={data}>
        <Line type="monotone" dataKey="temperature" />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Forecast;
