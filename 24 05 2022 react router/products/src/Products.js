import React from 'react';
import { NavLink } from 'react-router-dom';
import { productData } from './data';

export default function Products() {
  {
    return productData.map((product) => (
      <NavLink key={product.id} to={`/product/${product.id}`}>
        {product.name}
      </NavLink>
    ));
  }
}
