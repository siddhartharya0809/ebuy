import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { Routes, Route } from 'react-router-dom';
// import {Link, BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
    // <Home />
    // <ProductList />
    // <Product />
    // <Register />
    // <Login />
    // <Cart />
  )
};

export default App;