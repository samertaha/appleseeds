import { Router } from 'express';
import { productsRouter } from './products.routes.js';

const indexRoute = Router();

indexRoute.use('/products', productsRouter);

export { indexRoute };
