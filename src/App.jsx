import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Nav from "./components/Nav";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <CartProvider>
      <Nav />
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
