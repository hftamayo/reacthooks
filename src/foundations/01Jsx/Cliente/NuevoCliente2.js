import React from 'react';

/* Ejemplo de un componente funcional: 
La libreria Math actualizara datos en vivo por tanto debe ir rodeada de {}.
A esto se le denomina como Dynamic Content*/
const nuevoclientev2 = () => {
    return <p>Mi nombre es Norberto Huezo, soy un 
        cliente y tengo {Math.floor(Math.random() * 30)} años</p>
}

export default nuevoclientev2;