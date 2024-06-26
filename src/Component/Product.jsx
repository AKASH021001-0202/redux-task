import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/reducer/action";
import StarRating from "./StarRating";

const Products = ({ products = [] }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart((prevState) => ({ ...prevState, [product.id]: true }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-6 mx-auto p-5 rounded" key={index}>
              <div className="product-box row p-3 rounded">
                <div className="col-md-4 d-flex justify-content-center">
                  <img
                    className="img-thumbnail"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </div>
                <div className="col-md-8">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <h6>₹{product.price}</h6>
                  <StarRating rating={product.rating} />
                  {addedToCart[product.id] ? (
                    <Link to="/cart" className="btn btn-primary">
                      Go To Cart
                    </Link>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
