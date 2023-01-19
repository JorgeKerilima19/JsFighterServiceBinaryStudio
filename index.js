const API_URL = 'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: "token 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"
  }
};
const rootElement = document.getElementById('root');
rootElement.innerText = 'Loading...';
// const responsivePromise=fetch(API_URL, SECURITY_HEADERS)
fetch(API_URL)
  .then(response => response.json())
  .then(file => {
    const fighters = JSON.parse(atob(file.content));
    const names = fighters.map(it => it.name);
    const namesStr = names.join('\n'); 
    rootElement.innerText = namesStr;
  });