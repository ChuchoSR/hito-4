import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PizzaModal = ({ show, onHide, pizza }) => {
  if (!pizza) return null; // Si no hay pizza, no renderizamos el modal

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {pizza.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Descripción</h4>
        <p>{pizza.desc}</p>
        <h4>Ingredientes</h4>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4>Precio</h4>
        <p>${pizza.price.toLocaleString('es-CL')}</p>
        <img src={pizza.img} alt={pizza.name} style={{ width: '100%', borderRadius: '10px' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PizzaModal;