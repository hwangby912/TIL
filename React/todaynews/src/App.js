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
      return (
        <News
          author={articles.author}
          title={articles.title}
          url={articles.url}
          urlToImage={articles.urlToImage}
          source={articles.source}
          description={articles.description}
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
          <div clock>
            <Clock
              className="clock"
              format={"YYYY년 MM월 DD일"}
              ticking={false}
              timezone={"kr"}
            />
          </div>
          <header className="header-padding">TODAY NEWS</header>
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
