import React from 'react'
import { useCart } from '../Context/CartContext'

const Cart = () => {

    const {cart, setCart} = useCart();

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) => 
            prevCart.map((item) => {
                return item.id === id ? {...item, quantity: item.quantity + 1} : item
                }
            )
        )
    }

    const decreaseQuantity = (id) => {
        setCart((prevCart) => 
        prevCart.map((item) => 
            item.id === id ? {...item, quantity: item.quantity - 1} : item
        )
            .filter((item) => item.quantity > 0)
        )
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    /* const [cart, setCart] = useState([]); */
    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            {cart.length > 0 ? (
                cart.map((pizza) => (
                    <div key={pizza.id} className="cart-item">
                        <h3>{pizza.name}</h3>
                        <p>Precio: ${pizza.price}</p>
                        <p>Cantidad: {pizza.quantity}</p>
                        <button onClick={() => increaseQuantity(pizza.id)}>+</button>
                        <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                    </div>
                ))
            ) : (
                <p>El carrito está vacío</p>
            )}
            <h2>Total: {formatPrice(calculateTotal())}</h2>
            <button onClick={() => alert('Funcionalidad de pago no implementada aún')}>
                Pagar
            </button>
        </div>
    )
}

export default Cart