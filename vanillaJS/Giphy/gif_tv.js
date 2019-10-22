const contents = ["cat", "WOW", "movie dark-night", "Heath Ledger joker"];
// contents를 찾아서 3초마다 돌아가면서 보여주기
// setInterval

const keyword = contents[Math.floor(Math.random * contents.length)];

function searchTV(keyword) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToTVDOM(parsedData);
  });
}

const tvArea = document.querySelector("#js-tv-area");

function pushToTVDOM(parsedData) {
  tvArea.innerHTML = null;
  const dataSet = parsedData.data;
  let i = 0;

  setInterval(() => {
    const imageURL = dataSet[i].images.fixed_height.url;
    tvArea.innerHTML = `<img src="${imageURL}" class="img-center" />`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => searchTV(keyword));
