// src/components/ProductList.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="border-b py-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
