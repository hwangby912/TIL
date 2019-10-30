import React from "react";
import PropTypes from "prop-types";

const products = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    id: 4,
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    id: 5,
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    id: 6,
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7"
  }
];

function isStocked(stocked) {
  return stocked ? "available" : "not available";
}

function Product({ name, stocked, price }) {
  return (
    <div>
      <h2>This category is {name}</h2>
      <h3>This product is {isStocked(stocked)}</h3>
      <h4>Price is {price}</h4>
    </div>
  );
}

// value type check
Product.propTypes = {
  name: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired
};

function App() {
  return (
    <div>
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          stocked={product.stocked}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
