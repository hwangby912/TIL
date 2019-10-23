// ES5
function makeRequest(url, method) {
  if (!method) {
  }
  doSomething(url, method);
}

// ES6
function makeRequest2(url, method = "GET") {
  console.log(url, method);
}

makeRequest2("hello", "POST");
makeRequest2("hello");

const sum = (a = 0, b = 0) => a + b;
sum();
