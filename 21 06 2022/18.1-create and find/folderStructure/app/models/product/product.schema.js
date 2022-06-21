import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let DetailsSchema = new Schema({
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  images: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 10'],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (phone) => {
        const pattern = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/i;
        return pattern.test(phone);
      },
      message: (props) => `${props.value} is not in correct format !!`,
    },
  },
  DateAdded: {
    type: Date,
    default: Date.now(),
  },
});

function arrayLimit(val) {
  return val.length >= 2;
}
let productSchema = new Schema(
  {
    name: {
      type: String,
      rquired: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    details: DetailsSchema,
  },
  { collection: 'products' }
);

export { productSchema };
