const get6 = require("./get6");
const randomNumber = require("./pick6");

get6(881).then(data => {
  console.log(data.bnusNo);
  console.log(data.realNumbers);
  console.log(randomNumber);
});
