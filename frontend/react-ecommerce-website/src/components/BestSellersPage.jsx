import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const BestSellersPage = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 50,
      quantity: 1,
      colors: ['black', 'white', 'gray'],
      sizes: ['S', 'M', 'L'],
      image: './public/store-pics/womenpage/women5.jpg', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 70,
      quantity: 1,
      colors: ['blue', 'green', 'yellow'],
      sizes: ['M', 'L', 'XL'],
      image: './public/store-pics/Menpage/men1.jpg', // Placeholder image URL
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 60,
      quantity: 1,
      colors: ['red', 'purple', 'orange'],
      sizes: ['S', 'L', 'XL'],
      image: './public/store-pics/womenpage/women3.jpg', // Placeholder image URL
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 80,
      quantity: 1,
      colors: ['black', 'blue', 'green'],
      sizes: ['S', 'M', 'L'],
      image: './public/store-pics/Menpage/men2.jpg', // Placeholder image URL
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 90,
      quantity: 1,
      colors: ['yellow', 'gray', 'black'],
      sizes: ['M', 'L', 'XL'],
      image: './public/store-pics/womenpage/women2.jpg', // Placeholder image URL
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 70,
      quantity: 1,
      colors: ['red', 'blue', 'white'],
      sizes: ['S', 'M', 'L'],
      image: './public/store-pics/Menpage/men5.jpg', // Placeholder image URL
    },
  ]);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    addToCart(productToAdd);
    console.log(`Product ${productId} added to cart: `, productToAdd);
  };

  const handleQuickView = (productId) => {
    console.log(`Quick view for Product ${productId}`);
  };

  const handleIncrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleDecrement = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700">Price: ${product.price}</p>
            <div className="flex items-center mt-4">
              <div className="mr-4">
                <label className="text-sm font-medium">Color:</label>
                <div className="flex mt-1">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-6 h-6 mr-2 rounded-full border-2 border-gray-200`}
                      style={{ backgroundColor: color }}
                      title={color}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="mr-4">
                <label className="text-sm font-medium">Size:</label>
                <select className="block w-20 mt-1">
                  {product.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleQuickView(product.id)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Quick View
                </button>
              </div>
            </div>
            <div className="flex mt-2">
              <button
                onClick={() => handleDecrement(product.id)}
                className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded-l"
              >
                -
              </button>
              <span className="bg-gray-200 text-gray-700 py-1 px-4">{product.quantity}</span>
              <button
                onClick={() => handleIncrement(product.id)}
                className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded-r"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersPage;
