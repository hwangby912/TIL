// ES5
const colors = ["red", "green", "blue"];
const color = "red";
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6
colors.forEach(ele => console.log(ele));

// Practice
function forEach(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("First Parameter is not Array!");
  }
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(colors, e => console.log(e));
// forEach(color, e => console.log(e)); // throw new에 걸림

// Practice 2
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const area = [];

images.forEach(ele => {
  area.push(ele.h * ele.w);
});

area.forEach(ele => console.log(ele));
