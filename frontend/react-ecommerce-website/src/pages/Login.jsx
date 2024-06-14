// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Asegúrate de importar useAuth
import PropTypes from 'prop-types';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client'); // Estado para almacenar el tipo de usuario
  const navigate = useNavigate();
  const { login } = useAuth(); // Asegúrate de usar useAuth correctamente

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Aquí podrías verificar si el username es de un administrador o cliente
    if (username === 'admin') {
      login({ username, userType: 'admin' });
      navigate('/admin');
    } else {
      login({ username, userType: 'client' });
      navigate('/account');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  element: PropTypes.element,
};

export default Login;
