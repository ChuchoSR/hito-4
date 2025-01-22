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
import { useCart } from "./Context/CartContext";
import Profile from "./Components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* const [cart, setCart] = useState([]); */
  const [users, setUsers] = useState([
    { email: "prueba@example.com", password: "123456" },
    { email: "prueba2@example.com", password: "123456" },
  ]);

  const { cart, addToCart, calculateTotal } = useCart();


  return (
    <div className="app-container">
      <CustomNavbar
        isLoggedIn={isLoggedIn}
        total={calculateTotal()}
        /* toggleCart={() => setIsCartOpen(!isCartOpen)} */
      />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart/>} /> {/* Aquí */}
        <Route path="/pizza/p001" element={<Pizza/>} />
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
        <Route
          path="/profile"
          element={<Profile/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
