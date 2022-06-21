import { Router } from 'express';
import { authUser } from '../middleware/auth.middleware.js';
import { createProduct } from '../controllers/product.controllers.js';
import { getProducts } from '../controllers/product.controllers.js';
import { getProduct } from '../controllers/product.controllers.js';
import { getActiveProducts } from '../controllers/product.controllers.js';
import { getMinMaxProducts } from '../controllers/product.controllers.js';

const productsRouter = Router();

productsRouter.post('/create', authUser, createProduct);
productsRouter.get('/', getProducts);
productsRouter.get('/minmax', getMinMaxProducts);
productsRouter.get('/active', getActiveProducts);
productsRouter.get('/:id', getProduct);

export { productsRouter };
