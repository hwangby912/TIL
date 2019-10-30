import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

// const data = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball"
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball"
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch"
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5"
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
// ];

// class형 component에다가만 state를 추가하여야함!
class App extends React.Component {
  state = {
    keyword: "",
    checked: false,
    data: null
  };

  async getData(url) {
    const res = await axios.get(url);
    const { data } = res; // const data = res.data;
    data.sort((first, last) => {
      // if (first.category < last.category) return -1;
      // if (first.category > last.category) return 1;
      // return 0;

      // 같은 Logic
      return first.category < last.category ? -1 : 1;
    });
    this.setState({ data }); // this.setState({ data : data })
    console.log(data);
  }

  // API를 찔러서 Data를 가져오는 일을 할 것임
  componentDidMount() {
    const url = "https://frozen-ocean-08299.herokuapp.com";
    this.getData(url);
  }

  handleKeywordChange = keyword => {
    this.setState({ keyword });
  };
  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <>
        <SearchBar
          handleKeywordChange={this.handleKeywordChange}
          handleChecked={this.handleChecked}
        />
        <ProductTable
          data={this.state.data}
          keyword={this.state.keyword}
          checked={this.state.checked}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
