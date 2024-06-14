import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import BestSellersPage from './components/BestSellersPage';
import Register from './pages/Register';
import Login from './pages/Login';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Account from './pages/Account';
import { AuthProvider, useAuth } from './context/AuthContext';
import ContactUsPage from './pages/ContactUsPage';
import PropTypes from 'prop-types';

// Importa Admin y AdminAddP
import Admin from './pages/Admin';
import AdminAddP from './components/AdminAddP';

const stripePromise = loadStripe('tu-clave-publicable-aquí');

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <AuthProvider>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<WomenPage />} />
                <Route path="/men" element={<MenPage />} />
                <Route path="/bestsellers" element={<BestSellersPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<ContactUsPage />} />

                {/* Rutas para el panel de administración */}
                <Route path="/admin/*" element={<PrivateRoute><Admin /></PrivateRoute>} />

                {/* Ruta para añadir producto, solo accesible para administradores */}
                <Route path="/admin/add-product" element={<PrivateRoute><AdminAddP /></PrivateRoute>} />

                {/* Ruta para el registro, solo accesible para administradores */}
                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </AuthProvider>
        </Elements>
      </CartProvider>
    </Router>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
