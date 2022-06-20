const mongoose = require('mongoose');
const products = require('./model');
const port = 4000;

var uri = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

var data = [
  {
    name: 'product1',
    category: 'electronics',
    isActive: true,
    details: {
      description: 'sdfsdgfdsfgdsfgdsfgdsfgdsfg',
      price: 100,
      discount: 100,
      images: ['url1', 'url2'],
      phone: '046552219',
    },
  },
];

products.insertMany(data, function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
