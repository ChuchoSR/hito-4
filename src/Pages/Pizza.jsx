import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PizzaModal from "./PizzaModal"; // Importamos el modal
import Button from 'react-bootstrap/Button';

const Pizza = () => {
  const { id } = useParams();
  const [pizzas, setPizzas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false); // Estado para controlar el modal

  const url = `http://localhost:5000/api/pizzas/${id}`;

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Pizza no encontrada");
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, [id]);

  if (loading) return <p>Cargando los detalles de tu pizza...</p>;
  if (error) return <p>Ha ocurrido un error: {error}</p>;

  return (
    <div className="pizza-container">
      <div className="pizza-detail">
        <h2>{pizzas.name}</h2>
        <p>{pizzas.desc}</p>
        <h3>Precio: ${pizzas.price.toLocaleString('es-CL')}</h3>
        <ul>
          {pizzas.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <img
          src={pizzas.img}
          alt={pizzas.name}
          style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }}
          onClick={() => setModalShow(true)} // Abrir modal al hacer clic en la imagen
        />
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Ver más detalles
        </Button>
      </div>

      {/* Modal */}
      <PizzaModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        pizza={pizzas}
      />
    </div>
  );
};

export default Pizza;