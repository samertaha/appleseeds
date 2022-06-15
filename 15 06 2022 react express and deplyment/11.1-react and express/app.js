const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options('', cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, X-CallbackType, Content-Type, Accept'
  );
  res.header('Cache-Control', 'no-cache');
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.get('/:location', (req, res) => {
  let { location } = req.params;

  try {
    axios
      .get(`https://goweather.herokuapp.com/weather/${location}`)
      .then((result) => {
        res.json({ temp: result.data.temperature });
      });
    return;
  } catch (err) {
    res.status(err.status).send('err.message');
  }
});
app.listen(3300, () => console.log('Example app listening on port 3300!'));
