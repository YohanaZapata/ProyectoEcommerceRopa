// CheckoutModal.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const CheckoutModal = ({ isOpen, onRequestClose, onConfirm }) => {
  const [address, setAddress] = useState('');

  const handleConfirm = () => {
    if (address.trim() === '') {
      alert('Please enter delivery address.');
      return;
    }

    onConfirm(address);
    setAddress('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Checkout"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Delivery Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm
        </button>
        <button
          onClick={onRequestClose}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ml-2 rounded"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

CheckoutModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default CheckoutModal;
