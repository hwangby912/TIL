// Array에서만 사용 가능
// ES5
const users = [
  { name: "HBY" },
  { name: "Hwang" },
  { name: "Byeong" },
  { name: "Yoon" }
];

let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "HBY") {
    user = users[i];
    break;
  }
}

// ES6
user = users.find(user => {
  return user.name === "HBY";
});

// 실제로는 어떻게 쓰는가?
const data = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Hulk" },
  { id: 3, name: "Thor" },
  { id: 4, name: "pepper" }
];

// DB에서 조회한 값
const whatWeWant = data.find(e => e.id === 3);

// Practice1
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "pizza", type: "fastfood" },
  { name: "onion", type: "vegetable" }
];

// name이 pizza인 것을 가져오기
console.log(products.find(e => e.name === "pizza"));
