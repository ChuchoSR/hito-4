import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ isLoggedIn, total, toggleCart  }) => {
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='navbar-container'>
                    <div className='navbar-left'>
                        <Navbar.Brand className='brand'>Pizzería Mamma mía!</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link 
                                to="/" 
                                className='nav-link active'>
                                    Home
                                    </Link>
                            <Link
                                to="/register"
                                className='nav-link active'>
                                    {isLoggedIn ? '🔓Logout' : '🔐Registro'}    
                            </Link>
                            <Link
                                to="/login"
                                className='nav-link active'>
                                    {isLoggedIn ? '🔓Logout' : '🔐Login'}    
                            </Link>
                        </Nav>
                    </div>
                    <div className='navbar-right'>
                        <Link
                            to="/cart"
                            className='nav-link active'>
                                <Button 
                                    variant="outline-primary" onClick={toggleCart}>🛒 
                                    Total: {formatPrice(total)}
                                </Button>
                        </Link>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
