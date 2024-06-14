// src/pages/Admin.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/admin/add-product" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Añadir Producto
          </Link>
          {/* Otros enlaces de administración */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
