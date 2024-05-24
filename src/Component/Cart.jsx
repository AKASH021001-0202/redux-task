import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { remove_from_cart, updateQuantity } from "../store/reducer/action";

import StarRating from "./StarRating"; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const quantities = useSelector((state) => state.cart.quantities);
  const dispatch = useDispatch();

  const calculateSubtotal = (item) => {
    const quantity = quantities[item.id] || 1;
    return quantity * item.price;
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="remove-cart">
            <h2>Cart</h2>

            <Link
              to="/"
              onClick={() => dispatch(reset_cart)}
              className="btn btn-danger text-white"
            >
              Clear Cart
            </Link>
          </div>
            <hr />
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto p-5 rounded">
            {cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <div
                  className="product-box row my-3 p-3 bg-light rounded"
                  key={index}
                >
                  <div className="col-md-3 d-flex justify-content-center">
                    <img
                      className="img-thumbnail"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <StarRating rating={item.rating} />
                  </div>
                  <div className="col-md-3">
                    <select
                      value={quantities[item.id] || 1}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity(item.id, parseInt(e.target.value))
                        )
                      }
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                    <h6>₹{item.price}</h6>
                    <button
 
 onClick={() => dispatch(remove_from_cart(item.id))}
 className="btn btn-danger text-white"
>
 Remove
</button>
                  </div>
                </div>
              ))}
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between">
                <span>Sub Total</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="col-md-12 d-flex justify-content-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="col-md-12 d-flex justify-content-between">
                <span>Total</span>
                <span>₹ {subtotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
