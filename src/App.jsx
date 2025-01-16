import { useState } from 'react';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Cart from './Components/Cart';
import Pizza from './Components/Pizza';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Nuevo estado para el modal del carrito

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
        toggleCart={() => setIsCartOpen(!isCartOpen)} // Controla el modal
      />
      {/* <Home addToCart={addToCart} />
      {isCartOpen && (
        <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Cart cart={cart} setCart={setCart} />
            <button onClick={() => setIsCartOpen(false)}>Cerrar</button>
          </div>
        </div> 
      )} */} {/* comentado por el desafio */}
      <Pizza/>
      <Footer />
    </div>
  );
}

export default App;
