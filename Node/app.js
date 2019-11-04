const logger = require("./logger");
// require는 module.exports를 return 한다.

const wrapper = () => {
  logger("Running");
};

module.exports = wrapper;
