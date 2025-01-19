import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Login({setIsLogin}) {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

const users = [
{email: 'prueba@example.com', password: '123456'},
{email: 'prueba2@example.com', password: '123456'}
]

const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Por favor, complete todos los campos.");
        return;
    }

    if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        setError(""); // Limpia cualquier mensaje de error
        alert("Login exitoso");
        setIsLogin(true);
    } else {
        setError("Credenciales incorrectas, por favor, intente nuevamente.");
    }
};

    return (
        <Form className="login-container">
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit" 
                onClick={handleSubmit}
                >
                Login
            </Button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <p className="mt-3">
                ¿Ya tiene una cuenta?{" "}
                <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
                >
                <Link to="/register">
                    Regístrese
                </Link>
                </span>
            </p>
        </Form>
    );
}

export default Login;