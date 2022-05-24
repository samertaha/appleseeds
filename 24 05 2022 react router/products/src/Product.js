import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { productData } from './data';

export default function Product() {
  const params = useParams();
  const [product, setProduct] = React.useState(null);
  React.useEffect(() => {
    const prod = productData.find((p) => p.id === params.id * 1);
    console.log(params);
    setProduct(prod);
  });

  return (
    <div>
      <h3>
        {product !== null && (
          <>
            <div>{product.name}</div>
            <div>{product.description}</div>
          </>
        )}
      </h3>
    </div>
  );
}
