const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts';
const data = {
  a: 10,
  b: 20,
};
axios
  .post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  })
  .then(({ data }) => {
    console.log(data);
  });
//----------------------------------------------------------------
const request = require('request');

const options = {
  url: 'https://www.reddit.com/r/funny.json',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client',
  },
};

request(options, function (err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
});
//------------------------------------------------
//const fetch = require('node-fetch');
