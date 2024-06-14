// src/components/ProductCard.jsx

import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Agregar más detalles del producto según sea necesario */}
    </div>
  );
};

// Validar PropTypes para ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Agregar más propiedades del producto según sea necesario
  }).isRequired,
};

export default ProductCard;
