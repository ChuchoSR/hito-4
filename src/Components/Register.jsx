import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext"; // Importamos UserContext
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useContext(UserContext); //register del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!email || !password || !repeatPassword) {
        setError("Por favor, complete todos los campos.");
        return;
        }

    if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
        await register(email, password); 
        setError(""); 
        alert("Registro exitoso");
    } catch (error) {
        setError("Error en el registro, por favor, intente nuevamente.");
    }
    };

    return (
        <Form className="register-container" onSubmit={handleSubmit}>
            <h1>Registro</h1>
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
            <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                <Form.Label>Repite el password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Repeat password"
                    required
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            <p className="mt-3">
                ¿Ya tiene una cuenta?{" "}
                <Link to="/login" style={{ color: "blue", cursor: "pointer" }}>
                    Inicie sesión
                </Link>
            </p>
        </Form>
    );
}

export default Register;