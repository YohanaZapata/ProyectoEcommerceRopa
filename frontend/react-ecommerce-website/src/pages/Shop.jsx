import React from 'react';
import Product from '../components/Product';

const Shop = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
