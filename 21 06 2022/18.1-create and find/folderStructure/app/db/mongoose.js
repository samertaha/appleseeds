import mongoose from 'mongoose';

mongoose.connect(
  'mongodb://127.0.0.1:27017/ecommerce',
  (error, mongoConnectionInstance) => {
    if (error) throw Error('Mongoose Connection!!, Error: ' + error);
    if (!process.env.NODE_ENV) {
      const { host, port, name } = mongoConnectionInstance;
      console.log({ host, port, name });
    }
  }
);
