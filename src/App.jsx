import React, { useContext } from "react";
import "./App.css";
import CustomNavbar from "./Components/CustomNavbar";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Pizza from "./Pages/Pizza";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import { useCart } from "./Context/CartContext";
import Profile from "./Components/Profile";
import { UserProvider, UserContext } from "./Context/UserContext"; 


const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to="/login" />;
};


const AuthRoute = ({ children }) => {
  const { token } = useContext(UserContext);
  return !token ? children : <Navigate to="/" />;
};

function App() {
  const { calculateTotal } = useCart(); 

  return (
    <UserProvider>
      {" "}
      {/* Envolvemos la aplicación con UserProvider */}
      <div className="app-container">
        <CustomNavbar total={calculateTotal()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />{" "}
          {/* Usamos :id para dinámico */}
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;