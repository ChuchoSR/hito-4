import React from 'react'

const Producto = () => {
    const productos = [
        {"id": 1,
        "nombre": "Camisa",
        "precio": 1000},
        {"id": 2,
        "nombre": "Pantalon",
        "precio": 2000},
        {"id": 3,
        "nombre": "Zapato",
        "precio": 3000},
        {"id": 4,
        "nombre": "Gorra",
        "precio": 3000},

]

    return (
        <>
            <h1>Lista de productos</h1>
            
                {productos.map((product, id) => {
                    return (
                        <h2 key={id}>{product.nombre}</h2>
                    )
                })}
                {productos.map((product, id) => {
                    return (
                        <h2 key={id}>{product.precio}</h2>
                    )
                })}
            
        </>
    )
}

export default Producto