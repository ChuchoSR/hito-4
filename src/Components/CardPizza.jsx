import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardPizza = ({name, price, ingredients, img, addToCart, id}) => {

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
              <Button variant="light">Ver Más👀</Button>
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


