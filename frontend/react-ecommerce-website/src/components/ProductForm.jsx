// src/components/ProductForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Product Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Product</button>
    </form>
  );
};

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
