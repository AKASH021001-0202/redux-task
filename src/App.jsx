import { Provider } from "react-redux";
import store from "./store/store.js";
import Header from "./Component/Header.jsx";
import Products from "./Component/Product.jsx";
import Productdata from "./product.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Products products={Productdata.products} />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
