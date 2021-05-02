import React, { Component } from 'react';
import Nuevocliente5 from './NuevoCliente5';
import '../../App.css';
//uso de class based component implementando States
class verclientes1 extends Component{
    
    state = {
        persons: [
            {nombre: 'Irving Jhonson', edad: 40},
            {nombre: 'Isaiah Thomas', edad: 38},            
            {nombre: 'Charles Barkley', edad: 26}
        ]
    }

    //funcion para actualizar los valores de state usando el boton
    cambiaNombresHandler = () => {
        console.log("DOM renderizado, se actualiza los props y states");
        //Ejmplo de mutacion incorrecta: this.state.persons[0].name = "Michael Jordan"
        //debe utilizarse el metodo reservado useState
        this.setState({
            persons: [
                {nombre: 'Michael Jordan', edad: 23},
                {nombre: 'Scottie Pipen', edad: 33},            
                {nombre: 'Tony Kukoc', edad: 45}
            ]
        })
    }


    render(){
        return(
            <div className="cajatipo1">
                <p>Uso de componentes class based y states</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}
                <button onClick={this.cambiaNombresHandler}>Switch Name1</button>
                <Nuevocliente5 nombre={this.state.persons[0].nombre} edad={this.state.persons[0].edad}>Equipo: Lakers</Nuevocliente5>
                <Nuevocliente5 nombre={this.state.persons[1].nombre} edad={this.state.persons[1].edad}>Equipo: Pistons</Nuevocliente5>            
                <Nuevocliente5 nombre={this.state.persons[2].nombre} edad={this.state.persons[2].edad}>Equipo: Suns</Nuevocliente5>                            
            </div>    
        )
    }
}

export default verclientes1;