import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import EditAddress from "./EditAddress";
import EditProfile from "./EditProfile";
import Logout from "./Logout";

const Account = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><Link to="edit-profile" className="text-blue-600 hover:underline">Edit Profile</Link></li>
          <li><Link to="edit-address" className="text-blue-600 hover:underline">Edit Address</Link></li>
          <li><Link to="logout" className="text-blue-600 hover:underline">Logout</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="edit-profile" element={<EditProfileForm />} />
        <Route path="edit-address" element={<EditAddressForm />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

const EditProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar la lógica para enviar los datos del perfil
    console.log('Datos del perfil enviados');
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="email" name="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

const EditAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías implementar la lógica para enviar los datos de la dirección
    console.log('Datos de la dirección enviados');
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Edit Address</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" id="city" name="city" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
          <input type="text" id="zipcode" name="zipcode" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Account;
