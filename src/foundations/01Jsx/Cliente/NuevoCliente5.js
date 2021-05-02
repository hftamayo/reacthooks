import React from 'react';
/*
uso de children props:
-debo envolver el return en un div, usando 2 paragraphs de manera opcional
-props.children es una palabra reservada, se refiere a cualquier elementos
que esta encerrado entre elementos con tagas abiertos y cerrados
<Nuevocliente3 nombre="Lionel Messi" edad="33">Hobbies: Jugar Play</Nuevocliente3>
<Nuevocliente4 nombre="Ansu Fati" edad="19">Hobbies: Jugar NES</Nuevocliente4>
*/
const nuevoclientev5 = (props) => {
    return (
        <div>
            <p>Mi nombre es {props.nombre}, soy un cliente y tengo {props.edad} años<br />
            {props.children}</p>
        </div>
    )
    
    
    
}

export default nuevoclientev5;