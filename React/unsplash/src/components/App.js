import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: [],
    page: 1
  };

  handlePage = e => {
    if (e) this.setState({ page: this.state.page + 1 });
    else this.setState({ page: this.state.page - 1 });
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };

  onSubmit = async () => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: this.state.keyword,
        page: this.state.page,
        per_page: 5
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          handleKeyword={this.handleKeyword}
          onSubmit={this.onSubmit}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.page === 1 ? null : (
            <button
              className="ui button"
              onClick={() => {
                this.handlePage(false);
                this.onSubmit();
              }}
            >
              Prev Page
            </button>
          )}
          <ImageList images={this.state.images} />
          {this.state.images.length === 0 ? null : (
            <button
              className="ui button"
              onClick={() => {
                this.handlePage(true);
                this.onSubmit();
              }}
            >
              Next Page
            </button>
          )}
        </div>
      </div>
    );
  }
}
