import React from 'react';
/*
uso de children props:
-debo envolver el return en un div, usando 2 paragraphs de manera opcional
-props.children es una palabra reservada, se refiere a cualquier elementos
que esta encerrado entre elementos con tagas abiertos y cerrados
<Nuevocliente3 nombre="Lionel Messi" edad="33">Hobbies: Jugar Play</Nuevocliente3>
<Nuevocliente4 nombre="Ansu Fati" edad="19">Hobbies: Jugar NES</Nuevocliente4>
-En seguimiento a la leccion46 se agrega el evento onClick para intercambiar props
entre componentes, notese que onClick recibe del objeto props la variable que se ha
enviado desde VerClientes1a
*/
const nuevoclientea = (props) => {
    return (
        <div>
            <p onClick={props.actNombre}>Mi nombre es {props.nombre}, soy un cliente y tengo {props.edad} años<br />
            {props.children}</p>
            {/*two way binding*/}
            <input type="text" onChange={props.cambiartxt} value={props.nombre} />
        </div>
    )
    
    
    
}

export default nuevoclientea;