import React, { Component } from 'react';
import Nuevocliente5a from './NuevoCliente5a';
import '../../App.css';
//uso de class based component implementando States
//leccion 46: paso de referencias entre componentes
class verclientes1a extends Component{
    
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

    //two way binding
    actualizarNombresHandler = (event) => {
        this.setState({
            persons: [
                {nombre: event.target.value, edad: 1},
                {nombre: event.target.value, edad: 33},            
                {nombre: 'La Lakers', edad: 5}
            ]
        })
    }

    render(){
        return(
            <div className="cajatipo1">
                <p>Uso de componentes class based y states (intercambio de props entre componentes</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}

                {/*en cada instancia hay un evento click, que servirá para enviar
                parametro al componente */}
                <button onClick={this.cambiaNombresHandler}>Switch Name1</button>
                <Nuevocliente5a 
                nombre={this.state.persons[0].nombre} 
                edad={this.state.persons[0].edad}
                cambiartxt={this.actualizarNombresHandler}                                
                >Equipo: Lakers
                </Nuevocliente5a>
                
                {/*El prop actNombre puede ser cualquier otro nombre */}
                <Nuevocliente5a 
                nombre={this.state.persons[1].nombre} 
                edad={this.state.persons[1].edad}
                actNombre={this.cambiaNombresHandler}
                cambiartxt={this.actualizarNombresHandler}
                >Equipo: Pistons
                </Nuevocliente5a>            
                
                <Nuevocliente5a 
                nombre={this.state.persons[2].nombre} 
                edad={this.state.persons[2].edad}>Equipo: Suns
                </Nuevocliente5a>                            
            </div>    
        )
    }
}

export default verclientes1a;