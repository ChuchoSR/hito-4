import { useState } from "react";
import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Pizza from "./Pages/Pizza";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([
    { email: "prueba@example.com", password: "123456" },
    { email: "prueba2@example.com", password: "123456" },
  ]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app-container">
      <CustomNavbar
        isLoggedIn={isLoggedIn}
        total={calculateTotal()}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> {/* Aquí */}
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route
          path="/login"
          element={<Login setIsLogin={setIsLoggedIn} users={users} />}
        />
        <Route
          path="/register"
          element={<Register setUsers={setUsers} users={users} />}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
