// ES5
const computer = {
  model: "macbook-pro",
  year: 2017,
  price: 400
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

// ES6
const labtop = {
  model: "gram",
  year: 2018,
  price: 100
};
const { model, year, price } = labtop;

// 실제로는 어떻게 쓰는가?
// ES5
const tag = `<h1>This is ${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;
// ES6
const newTag = `<h1>This is ${model} of ${year} ${price}</h1>`;

const labtops = [
  {
    model: "gram",
    year: 2018,
    price: 100
  },
  {
    model: "pen-s",
    year: 2017,
    price: 200
  },
  {
    model: "macbook",
    year: 2019,
    price: 250
  }
];

labtops.map(({ model }) => {
  return `<h1>${model}</h1>`;
});
