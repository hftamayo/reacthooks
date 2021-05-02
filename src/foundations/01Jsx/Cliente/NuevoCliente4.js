import React, { Component } from 'react';

/* uso de props en un componente: 
-pasar parametros
-getters y setters equivalentes en Java
-en este ejemplo, props puede tener cualquier nombre
-notese que el texto: Mi hobby es jugar play no es capturado por este componente 
debido a que no es un prop
En la version 4 de cliente el componente es class based, 
notese que tiene el metodo Render() y que al final siempre debe llevar export default

const nuevoclientev4 = (props) => {
    return <p>Mi nombre es {props.nombre}, soy un 
        cliente y tengo {props.edad} años</p>
}

export default nuevoclientev4;
*/

class nuevoclientev4 extends Component{
    render(){
    return <p>Mi nombre es {this.props.nombre}, soy un
    cliente y tengo {this.props.edad} años</p>
    }
}

export default nuevoclientev4;