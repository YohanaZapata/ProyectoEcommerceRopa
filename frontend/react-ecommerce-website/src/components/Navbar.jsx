import React from 'react';
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/useSearch';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { searchTerm, search } = useSearch();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (event) => {
    search(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Buscando:', searchTerm);
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <div className="flex items-center gap-4 text-lg text-black">
          <Link to="/" className="text-black">Lost & Beyond</Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border px-2 py-1 rounded focus:outline-none"
            />
            <button type="submit" className="text-black">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="flex items-center gap-4 text-lg text-black">
          <Link to="/contact" className="flex items-center gap-2"><FaUser />Contact Us</Link>
          {user ? (
            <>
              <Link to="/account" className="flex items-center gap-2"><FaUser />Account</Link>
              <button onClick={logout} className="flex items-center gap-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="flex items-center gap-2"><FaUser />Register</Link>
              <Link to="/login" className="flex items-center gap-2"><FaUser />Login</Link>
            </>
          )}
          <Link to="/cart" className="flex items-center gap-2 relative">
            <FaShoppingBag />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
            Cart
          </Link>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={handleMobileMenuToggle} className="text-black focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      <hr />
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 text-lg text-black mt-4">
          <Link to="/contact" className="flex items-center gap-2"><FaUser />Contact Us</Link>
          {user ? (
            <>
              <Link to="/account" className="flex items-center gap-2"><FaUser />Account</Link>
              <button onClick={logout} className="flex items-center gap-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="flex items-center gap-2"><FaUser />Register</Link>
              <Link to="/login" className="flex items-center gap-2"><FaUser />Login</Link>
            </>
          )}
          <Link to="/cart" className="flex items-center gap-2"><FaShoppingBag />Cart</Link>
        </div>
      )}
      <div className="pt-4">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-8">
          <li className="hover:text-orange-300 transition-colors duration-300">
            <Link to="/women" className="text-black px-4">Women</Link>
          </li>
          <li className="hover:text-orange-300 transition-colors duration-300">
            <Link to="/men" className="text-black px-4">Men</Link>
          </li>
          <li className="hover:text-orange-300 transition-colors duration-300">
            <Link to="/bestsellers" className="text-black px-4">Bestsellers</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
