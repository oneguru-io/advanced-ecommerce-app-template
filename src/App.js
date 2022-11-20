import { Routes, Route } from "react-router-dom";

// pages
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Orders from "./pages/orders";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;