import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="text-center text-white">React Redux</h1>
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <Link to="/" className="btn btn-primary mx-2">Home</Link>
            <Link to="/cart" className="btn btn-danger">
              Cart {cart?.count ?? 0}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
