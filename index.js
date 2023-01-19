const API_URL = 'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: "token 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"
  }
};

fetch(API_URL, SECURITY_HEADERS);