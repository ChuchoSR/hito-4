import React, { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

const CustomNavbar = ({toggleCart }) => {

    const { token, logout } = useContext(UserContext);
    const { calculateTotal } = useContext(CartContext);

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    

    /* console.log("Total calculado:", calculateTotal()); */

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container className='navbar-container'>
                <div className='navbar-left'>
                    <Navbar.Brand className='brand'>Pizzería Mamma mía!</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link active'>Home</Link>
                        {token ? (
                            // Si el token es true, mostramos Profile y Logout
                            <>
                                <Link to="/profile" className='nav-link active'>Profile</Link>
                                <Button variant="link" className='nav-link active' onClick={logout}>
                                    🔓Logout
                                </Button>
                            </>
                        ) : (
                            // Si el token es false, mostramos Login y Register
                            <>
                                <Link to="/register" className='nav-link active'>🔐Registro</Link>
                                <Link to="/login" className='nav-link active'>🔐Login</Link>
                            </>
                        )}
                    </Nav>
                </div>
                <div className='navbar-right'>
                    <Link to="/cart" className='nav-link active'>
                        <Button variant="outline-primary" onClick={toggleCart}>
                            🛒 Total: {formatPrice(calculateTotal())}
                        </Button>
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
};


export default CustomNavbar;
