import React from 'react';
import styled from 'styled-components';

    //``-> badTicks, este es un simbolo que se usa en ES6
    //StyleDiv siempre debe ir en PascalCase
    const StyleDiv = styled.div `
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width: 450px;
    }
`;
const nuevoclienteb = (props) => {

    return (
        <StyleDiv>
            <p onClick={props.actNombre}>Mi nombre es {props.nombre}, soy un cliente y tengo {props.edad} años<br />
            {props.children}</p>
            <input type="text" onChange={props.cambiartxt} value={props.nombre} />
        </StyleDiv>
    )
}

export default nuevoclienteb;