import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', description: '', price: '' });
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Gestionar Productos</h3>
      <div>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Añadir Producto
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl mb-2">Lista de Productos</h3>
        {products.map((product, index) => (
          <div key={index} className="border p-4 mb-2 rounded-lg">
            <h4 className="text-lg">{product.name}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
