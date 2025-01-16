import React from 'react'
import  CardPizza from '../Components/CardPizza'
import Header from '../Components/Header'
import pizzas from '../data/pizzas.js'
const Home = ({addToCart}) => {

/*   const formatPrice = (price) => {
    return `$${price.toLocaleString('es-CL')}`;
  }; */

  return (
    <>
      <Header className='header-container'/>
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza 
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  )
}

export default Home