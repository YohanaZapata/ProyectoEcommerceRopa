// src/pages/AccountPage.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Account Page</h2>
      <p>Welcome, {user.name}</p>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
