import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register({ setIsLogin, users, setUsers }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Por favor, complete todos los campos.");
        setSuccess("");
        return;
    }

    if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        setSuccess("");
        return;
    }

    if (users.some((user) => user.email === email)) {
        setError("Este correo ya está registrado.");
        setSuccess("");
        return;
    }

    // Agregar nuevo usuario
    setUsers([...users, { email, password }]);
    setError("");
    setSuccess("Registro exitoso. Ahora puede iniciar sesión.");
    setEmail("");
    setPassword("");
    };

    return (
        <Form className="register-container">
            <h1>Registro</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Ingrese su email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegister}>
                Registrarse
            </Button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">{success}</div>}
           
        </Form>
    );
}

export default Register;
