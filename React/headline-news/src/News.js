import React from "react";
import PropTypes from "prop-types";
import "./News.css";

function News({ author, title, url }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>title</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        <th className="title">
          <a href={url} target="_blank">
            <h3>{title}</h3>
          </a>
        </th>
        {/* <th className="url">
          기사 원문 URL :
          <a href={url} target="_blank">
            {url}
          </a>
        </th> */}
      </tbody>
    </table>
  );
}

News.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default News;
