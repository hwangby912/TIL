const request = require("request");

function getLottoData(drwNo) {
  const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      // body는 String이기에 parse해줌
      const lottoData = JSON.parse(body);
      const realNumbers = [];
      let bnusNo = 0;
      for (const [key, value] of Object.entries(lottoData)) {
        if (key.includes("drwt")) {
          realNumbers.push(value);
        } else if (key === "bnusNo") {
          bnusNo = value;
        }
        realNumbers.sort((a, b) => a - b);
      }
      resolve({ bnusNo, realNumbers });
    });
  });
}

// 함수 자체를 넘기기
module.exports = getLottoData;

/* 
const obj = {
  name: "Hwang",
  gender: "male"
};

// Object.entries(인자)
// 인자에 대해서 [key, value] 한 쌍을 묶어서 return 하는 문법
console.log(Object.entries(obj));
*/
