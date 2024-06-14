// src/components/ProductDetailModal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      const availableQuantity = product.sizes[selectedSize];
      if (availableQuantity >= quantity) {
        onAddToCart(product, selectedSize, quantity);
        onClose();
      } else {
        setError(`Only ${availableQuantity} items available for size ${selectedSize}`);
      }
    } else {
      setError('Please select a size and a valid quantity.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.description}</h2>
        <img src={product.image} alt={product.description} />
        <div>
          <label htmlFor="size">Size:</label>
          <select id="size" value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select size</option>
            {Object.keys(product.sizes).map(size => (
              <option key={size} value={size}>{size.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductDetailModal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetailModal;
