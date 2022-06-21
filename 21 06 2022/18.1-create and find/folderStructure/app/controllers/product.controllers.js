import { addProduct } from '../services/product.services.js';
import { getProductsService } from '../services/product.services.js';
import { getProductService } from '../services/product.services.js';
import { getActiveProductsService } from '../services/product.services.js';
import { getMinMaxProductsService } from '../services/product.services.js';
import { activeDiscountService } from '../services/product.services.js';

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const savedProduct = await addProduct(product); //Mongoose
    res.send(savedProduct);
  } catch (error) {
    res.send(error.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getProductsService(); //Mongoose
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await getProductService(id); //Mongoose
    res.send(product);
  } catch (error) {
    res.send(error.message);
  }
};
export const getActiveProducts = async (req, res) => {
  try {
    const products = await getActiveProductsService(); //Mongoose
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
};
export const getMinMaxProducts = async (req, res) => {
  const { min, max } = req.body;
  try {
    const products = await getMinMaxProductsService(min, max); //Mongoose
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
};
export const activeDiscountProduct = async (req, res) => {
  const { id, isActive, discount } = req.body;
  try {
    const result = await activeDiscountService(id, isActive, discount); //Mongoose
    console.log(result);
    res.send({ result });
  } catch (error) {
    res.send(error.message);
  }
};
