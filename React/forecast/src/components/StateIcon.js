import React from "react";

const StateIcon = ({ icon, description }) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
    </div>
  );
};

export default StateIcon;
