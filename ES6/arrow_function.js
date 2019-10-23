// ES5

function add(a, b) {
  return a + b;
}

// ES6

const multiply = (a, b) => {
  return a * b;
};

// 인자가 2개 이상부터는 괄호를 써줌
const mul = (a, b) => a * b;

// 인자가 하나이고 바로 return이면 다음과 같이 생략 가능
const square = a => a * a;

// 인자가 하나도 없으면 괄호를 써야함
const logging = () => console.log("logging");

// sayHello와 sayBye는 서로 같은 Format임
const obj = {
  name: "Byeong Yoon",
  sayHello: function() {
    console.log("Hello");
  },
  sayBye() {
    console.log("Bye");
  }
};
