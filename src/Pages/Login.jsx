import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext"; 
import Button from "react-bootstrap/Button"; 
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(UserContext); // login del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await login(email, password); // método login
      setError(""); 
      alert("Login exitoso");
    } catch (error) {
      setError("Credenciales incorrectas, por favor, intente nuevamente.");
    }
  };

  return (
    <Form className="login-container" onSubmit={handleSubmit}>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <p className="mt-3">
            ¿No tiene una cuenta?{" "}
            <Link to="/register" style={{ color: "blue", cursor: "pointer" }}>
            Regístrese
            </Link>
        </p>
    </Form>
  );
}

export default Login;