const url = "https://naver.com";

console.log("Only One Time Run");

const log = msg => {
  // something with url
  console.log(`Logging Message : ${msg}`);
};

console.log("It is true");

module.exports = log;
// module.exports.log = log;
// exports.log = log;
// exports = log; // module.
