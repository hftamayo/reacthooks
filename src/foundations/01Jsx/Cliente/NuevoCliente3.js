import React from 'react';

/* uso de props en un componente: 
-pasar parametros
-getters y setters equivalentes en Java
-en este ejemplo, props puede tener cualquier nombre
-notese que el texto: Mi hobby es jugar play no es capturado por este componente 
debido a que no es un prop
*/
const nuevoclientev3 = (props) => {
    return <p>Mi nombre es {props.nombre}, soy un 
        cliente y tengo {props.edad} años</p>
}

export default nuevoclientev3;