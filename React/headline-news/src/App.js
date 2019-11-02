import React, { Component } from "react";
import Clock from "react-live-clock";

import News from "./News";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    this._getNews();
  }

  _renderNews = () => {
    const news = this.state.news.map(articles => {
      console.log(articles);
      const company = articles.url.split("/");
      // console.log(company);
      return (
        <News
          author={articles.author}
          title={articles.title}
          url={articles.url}
          source={company[2]}
        />
      );
    });
    return news;
  };

  _getNews = async () => {
    const news = await this._callApi();
    this.setState({
      news
    });
  };
  _callApi = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=3659c1fa349c4449bd079c8211909132`
    )
      .then(a => a.json())
      .then(json => json.articles)
      .catch(err => console.log(err));
  };
  render() {
    const { news } = this.state;
    return (
      <>
        <div className="App">
          <h1>
            <Clock
              className="clock"
              format={"YYYY - MM - DD"}
              ticking={false}
              timezone={"kr"}
            />
          </h1>
          <header className="header-padding">
            <h1>Today HeadLine News</h1>
          </header>
          <main className="container">
            <div className={news ? "App" : "App-loading"}>
              {news ? this._renderNews() : "로딩중 ..."}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
