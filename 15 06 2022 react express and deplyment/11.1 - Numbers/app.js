const express = require('express');
var bodyParser = require('body-parser');

const app = express();
let numbers = [5, 10, 50, 1000, 700, 200];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.json(numbers));

app.post('/', (req, res) => {
  const { n } = req.body;
  try {
    if (numbers.includes(n)) {
      res.status(400);
      res.send(' the number already exists');
    } else {
      res.status(200);
      numbers = [...numbers, n];
      res.json(numbers);
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

app.delete('/:n', (req, res) => {
  let { n } = req.params;
  n = Number(n);

  try {
    if (!numbers.includes(n)) {
      res.status(400);
      res.send(' the number doesnt exists');
    } else {
      res.status(200);
      numbers = numbers.filter((num) => num !== n);
      res.json(numbers);
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

app.put('/:remove', (req, res) => {
  let { remove } = req.params;
  remove = Number(remove);
  let { add } = req.body;

  console.log('remove', remove, 'add', add);

  try {
    if (!numbers.includes(remove)) {
      res.status(400);
      res.send(' the number doesnt exists');
    } else {
      res.status(200);
      console.log('befor:', numbers);
      numbers = numbers.filter((num) => num !== remove);
      console.log('after remove:', numbers);
      numbers.push(add);
      console.log('after add:', numbers);
      res.json(numbers);
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
