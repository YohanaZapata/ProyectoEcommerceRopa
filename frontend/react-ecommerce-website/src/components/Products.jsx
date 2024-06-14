import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaPlus } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Products = ({ category }) => {
  const { addToCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);

  // Simula una lista de productos paginada
  const products = [
    // Agrega tus productos aquí
  ];

  // Calcula el índice de inicio y fin de los productos en la página actual
  const startIndex = (currentPage - 1) * 8;
  const endIndex = Math.min(startIndex + 8, products.length);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(startIndex, endIndex).map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex justify-between items-center mt-4">
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleAddToCart(product)}
              >
                <FaPlus className="mr-2" /> Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="text-blue-500">Quickview</Link>
            </div>
          </div>
        ))}
      </div>
      {/* Paginación */}
      <div className="flex justify-center mt-8">
        {[...Array(Math.ceil(products.length / 8)).keys()].map((pageNumber) => (
          <button 
            key={pageNumber + 1}
            className={`px-3 py-1 mx-1 border rounded ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
            onClick={() => setCurrentPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// Valida las props con PropTypes
Products.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Products;
