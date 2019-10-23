// ES5
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "pizza", type: "fastfood" },
  { name: "onion", type: "vegetable" }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    fruits.push(products[i]);
  }
}

// ES6
const vegetable = products.filter(ele => {
  return ele.type === "vegetable";
});

console.log(vegetable);

const comments = [
  { id: 1, author: "Hwang", contents: "xxxx" },
  { id: 2, author: "Byeong", contents: "xxxx" },
  { id: 3, author: "Yoon", contents: "xxxx" },
  { id: 4, author: "HBY", contents: "xxxx" }
];

const HBY = comments.filter(e => e.author === "HBY");
console.log(HBY);

// Practice
const numbers = [1, 3, 5, 6, 10, 54, 25, 330, 220, 5];
const filteredNumber = numbers.filter(e => 10 <= e && e <= 100);
console.log(filteredNumber);

// Practice 2
// filter를 이용하여 reject만들기(reject는 filter와 완전히 반대)
function reject(arr, callback) {
  return arr.filter(e => !callback(e));
}
console.log("reject", reject(numbers, e => e > 10));
