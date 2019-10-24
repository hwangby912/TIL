class Car {
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
    console.log("Constructor Call");
  }

  drive() {
    console.log(this.name, "부릉부릉~~~~~");
  }
}

const avante = new Car({
  name: "아반떼",
  price: 2500,
  year: 2019
});

const morning = new Car({
  name: "모닝",
  price: 2500,
  year: 2019
});

avante.drive();
morning.drive();

class SuperCar extends Car {
  constructor(options) {
    super(options);
    console.log("Super Car");
  }

  booster() {
    console.log("부아아아아아아아아아앙");
  }
}

const bentley = new SuperCar({
  name: "벤틀리",
  price: 10000,
  year: 2019
});

bentley.drive();
bentley.booster();

// Practice 1

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Dinosaur extends Monster {
  constructor(options) {
    super(options);
  }

  cramp(monster) {
    monster.health -= 10;
  }
}

const pikachu = new Monster({
  name: "Pikachu"
});

const tirano = new Dinosaur({
  name: "Tirano"
});

console.log(pikachu);
console.log(tirano);
tirano.cramp(pikachu);
console.log(pikachu.health);

// React 할 때 쓰임~~
// class App extends React.Component {}

// ReactDOM.render(<App />, document.querySelector("#root"));
