// ES5
const numbers = [10, 20, 30];
let sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// ES6
sum = numbers.reduce((acc, number) => {
  return acc + number;
  // 0 + 10 => 10 + 20 => 30 + 30
  // (acc + number) => (acc + number) => (acc + number)
}, 0);

let multiply = numbers.reduce((acc, number) => {
  return acc * number;
}, 1);

const strings = ["apple", "is", "good"];
const sumString = strings.reduce((acc, string) => {
  return acc + string;
}, "");

// map 함수 구현하기
let dNumbers = numbers.map(e => e * 2);
dNumbers = numbers.reduce((acc, number) => {
  acc.push(number * 2);
  return acc;
}, []);
// [10, 20, 30]
// [] 10, [20] => [20] 20 [20, 40] => [20, 40] 30 [20, 40, 60] => [20, 40, 60]
// 실제로는 어떻게 쓰는가?
/*
    올바르게 닫힌 괄호 : ((())), ()(), (), ((()()))
    올바르게 닫히지 않은 괄호 : ), )()()(, ()())
*/
// abc.split(''); => ['a', 'b', 'c'];

function isGoodBracket(string) {
  return !string.split("").reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === "(") {
      ++acc;
    } else if (char === ")") {
      --acc;
    }
    return acc;
  }, 0);
}

// Practice
let number = 0;
const attendees = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "standing" }
];

const standingPerson = attendees.reduce((acc, person) => {
  if (person.type == "standing") {
    acc++;
  }
  return acc;
}, 0);

console.log(standingPerson);

// Practice 2
// Unique를 만들어보자
const samples = [10, 20, 30, 20, 40, 10, 50];

function unique(arr) {
  return arr.reduce((acc, ele) => {
    if (!acc.find(element => element === ele)) {
      acc.push(ele);
    }
    return acc;
  });
}

const result = unique(samples);
