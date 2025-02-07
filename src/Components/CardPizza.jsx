import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const CardPizza = ({name, price, ingredients, img,  id}) => {

  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return `$${price.toLocaleString('es-CL')}`;
  };

  return (
    <>
      <div className='cards'>
        <Card >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <p className="ingredientes-title">Ingredientes:</p>
              <p className='ingredientes'>{`🍕 ${ingredients}`}</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <h3>{`Precio: ${formatPrice(price)}`}</h3>
            <div className="btn-cards">
              <Link
                to={`/pizza/${id}`}
              >
                <Button variant="light">Ver Más👀</Button>
              </Link>
              <Button variant="dark" 
              onClick={() => 
                addToCart({ id, name, price })}
              >
                Añadir🛒
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default CardPizza


