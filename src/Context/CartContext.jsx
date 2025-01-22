import {useContext,  useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //Agregando articulo al carrito
    const addToCart = (item) => {
        console.log("Producto recibido:", item);
        setCart((prevCart) => {
            console.log("Carrito actual:", prevCart);
            const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
            if (itemExists) {
                const updatedCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                console.log("Carrito actualizado:", updatedCart);
                return updatedCart;
            }
            const newCart = [...prevCart, { ...item, quantity: 1 }];
            console.log("Nuevo producto añadido al carrito:", newCart);
            return newCart;
        });
    };
    
    

    //Eliminando elementos del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => 
        prevCart.map((item) => 
            item.id === id ? {...item, quantity: item.quantity - 1} : item
        )
            .filter((item) => item.quantity > 0)
        )
    }

    //Totalizando todo
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    //Elementos a compartir en el contexto
    const value = {
        cart,
        addToCart,
        removeFromCart,
        calculateTotal
    };

    return( 
    <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, calculateTotal}}>
        {children}
    </CartContext.Provider>)
}

export const useCart = () => {
    return useContext(CartContext);
};