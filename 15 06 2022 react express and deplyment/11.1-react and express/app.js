const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3300;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log('Example app listening on port 3300!'));
