// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, totalAmount, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
        address: {
          line1: shippingInfo.address,
          city: shippingInfo.city,
          state: shippingInfo.state,
          postal_code: shippingInfo.postalCode,
          country: shippingInfo.country,
        },
        phone: shippingInfo.phone,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Aquí enviarías el paymentMethod.id y shippingInfo a tu backend para completar el pago
    // Simulación de éxito de pago
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingInfo.firstName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingInfo.lastName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold">City</label>
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">State/Province</label>
              <input
                type="text"
                name="state"
                value={shippingInfo.state}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Country</label>
              <input
                type="text"
                name="country"
                value={shippingInfo.country}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
          <div className="mb-4">
            <CardElement
              className="p-3 border rounded"
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
          {success && <p className="text-green-500 mt-4">Payment successful!</p>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
