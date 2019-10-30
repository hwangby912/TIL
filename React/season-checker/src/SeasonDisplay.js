import React from "react";
import "./SeasonDisplay.css";

const getSeason = (month, lat) => {
  if (3 < month && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "It is hot",
    iconName: "sun"
  },
  winter: {
    text: "It is cold",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(new Date().getMonth() + 1, props.lat);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon ${iconName} massive upper-left`} />
      <h1>{text}</h1>
      <i className={`icon ${iconName} massive bottom-left`} />
    </div>
  );
};

export default SeasonDisplay;
