import { Product } from '../models/product/product.model.js';

export const addProduct = async (product) => {
  const newProduct = new Product(product); // new product === instance
  Product.findSomethingNew();
  newProduct.instanceMethod();
  return await newProduct.save();
};
export const getProductsService = async () => {
  const products = Product.find({}); // new product === instance
  Product.findSomethingNew();
  //products.instanceMethod();
  return products;
};
export const getProductService = async (id) => {
  const product = Product.findOne({ _id: id }); // new product === instance
  Product.findSomethingNew();
  //products.instanceMethod();
  return product;
};
export const getActiveProductsService = async () => {
  const products = await Product.find({ isActive: true });
  Product.findSomethingNew();
  //products.instanceMethod();
  return products;
};

export const getMinMaxProductsService = async (min, max) => {
  const products = await Product.find({
    'details.price': { $gte: min, $lte: max },
  });
  Product.findSomethingNew();
  //products.instanceMethod();
  return products;
};
