import React, { useState, useContext } from "react";
import { useCart } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext"; 
const Cart = () => {
    const { cart, setCart } = useCart();
    const { token } = useContext(UserContext); 
    const [successMessage, setSuccessMessage] = useState(""); 

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
        prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
        prevCart
            .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0)
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = async () => {
    if (!token) {
        alert("Debes iniciar sesión para realizar la compra.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/checkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Enviamos el token en el header
        },
        body: JSON.stringify({ cart }), // Enviamos el carrito en el body
        });

        if (!response.ok) throw new Error("Error al realizar la compra");

        const data = await response.json();
            setSuccessMessage("Compra realizada con éxito. ¡Gracias por tu compra!"); // Mensaje de éxito
            setCart([]); // Vaciamos el carrito
    } catch (error) {
        console.error("Error en la compra:", error);
        alert("Hubo un error al realizar la compra. Inténtalo de nuevo.");
    }
};

    return (
        <div className="cart-container">
        <h1>Carrito</h1>
        {cart.length > 0 ? (
            cart.map((pizza) => (
            <div key={pizza.id} className="cart-item">
                <h3>{pizza.name}</h3>
                <p>Precio: {formatPrice(pizza.price)}</p>
                <p>Cantidad: {pizza.quantity}</p>
                <button onClick={() => increaseQuantity(pizza.id)}>+</button>
                <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
            </div>
            ))
        ) : (
            <p>El carrito está vacío</p>
        )}
        <h2>Total: {formatPrice(calculateTotal())}</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <button onClick={handleCheckout} disabled={cart.length === 0}>
            Pagar
        </button>
        </div>
    );
};

export default Cart;