import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = ({ isLoggedIn, total, toggleCart  }) => {
    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='navbar-container'>
                    <div className='navbar-left'>
                        <Navbar.Brand href="#home" className='brand'>Pizzería Mamma mía!</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='nav-link active'>Home</Nav.Link>
                            <Nav.Link href="#login" className='nav-link active'>
                                {isLoggedIn ? '🔐Login' : '🔓Login'}
                            </Nav.Link>
                            <Nav.Link href="#pricing" className='nav-link active'>
                                {isLoggedIn ? '🔐Register' : '🔓Register'}
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='navbar-right'>
                        <Button variant="outline-primary" onClick={toggleCart}>🛒 Total: {formatPrice(total)}</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
