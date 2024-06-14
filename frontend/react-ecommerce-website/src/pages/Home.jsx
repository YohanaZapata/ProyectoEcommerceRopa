// src/pages/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "T-shirt", price: 25, image: "./public/store-pics/menpage/men2.jpg" },
    { id: 2, name: "T-shirt", price: 25, image: "./public/store-pics/womenpage/women6.jpg" },
    // Agrega más productos aquí
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleBuyNow = (product) => {
    addToCart({ ...product, quantity: 1 });
    navigate('/checkout');
  };

  return (
    <div>
      {/* Imagen de fondo en el home */}
      <div className="h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/public/store-pics/homepage/home1.jpg")' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-4xl font-bold">
          ¡Venta de Ropa!
        </div>
      </div>

      {/* Fotos de la marca */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Lost & Beyon</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <img src="" alt="" className="" />
          </div>
          <div>
            <img src="" alt="" className="" />
          </div>
        </div>
      </div>

      {/* Productos */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Acclaimed & Beyond....</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} alt={product.name} className="w-full mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleAddToCart(product)}
                >
                  <FaPlus className="mr-2" /> Añadir al Carrito
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleBuyNow(product)}
                >
                  Comprar Ahora
                </button>
                <Link to={`/product/${product.id}`} className="text-blue-500">Ver Detalles</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Productos más buscados */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Productos Más Buscados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Aquí se debe consumir la API para mostrar los productos más buscados */}
            <div className="border p-4 rounded">
              <img src="./public/store-pics/womenpage/women5.jpg" alt="Product 1" className="w-full mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Producto 1</h3>
              <p className="text-gray-600">$100</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <FaPlus className="mr-2" /> Añadir al Carrito
                </button>
                <Link to="/product/1" className="text-blue-500">Ver Detalles</Link>
              </div>
            </div>
            {/* Repite este bloque para mostrar más productos */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
