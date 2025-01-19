import { useState, useEffect } from "react"
/* import React{useState} from 'react' */

const Pizza = () => {

    const [pizzas, setPizzas] = useState([])

    const url = 'http://localhost:5000/api/pizzas'

    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        setPizzas(data);
    }

    useEffect(() => {
        getData();
    }, []);

    const formatPrice = (price) => {
        return `$${price.toLocaleString('es-CL')}`;
    };

  return (
    <div className="pizza-container"> 
        {pizzas.length > 0 ? 
            ( pizzas.map((pizza) => ( 
                <div key={pizza.id} className="pizza-card">
                    <div className="top">
                        <div className="top-left">
                            <h2 className="pizza-name">{pizza.name}</h2> 
                            <h3>{formatPrice(pizza.price)}</h3>
                        </div>
                        <div className="top-right">
                            <ul>
                                {pizza.ingredients.map((ingredient) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>    
                        </div> 
                    </div>                 
                    <img src={pizza.img} alt="image-pizza" className="pizza-image"/>
                    <h4>{pizza.desc}</h4> 
                </div> )
                ) 
            ) : ( <p>Loading pizzas...</p> )} 
    </div>
  )
}

export default Pizza

