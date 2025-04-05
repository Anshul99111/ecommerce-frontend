import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
//added comments
const App = () => {
  return (
    <div>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
