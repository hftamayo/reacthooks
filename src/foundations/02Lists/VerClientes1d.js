import React, { Component } from 'react';
import Nuevocliente5b from './NuevoCliente5b';
import '../App.css';
//uso de maps para optimizar el proceso de visualizacion dinamica de los componentes
//se reduce el codigo fuente
//la funcion map es heredada de VanillaJS

class verclientes1d extends Component{
    
    state = {
        persons: [
            {nombre: 'Irving Jhonson', edad: 40},
            {nombre: 'Isaiah Thomas', edad: 38},            
            {nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
    }

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

    actualizarNombresHandler = (event) => {
        this.setState({
            persons: [
                {nombre: event.target.value, edad: 1},
                {nombre: event.target.value, edad: 33},            
                {nombre: 'La Lakers', edad: 5}
            ]
        })
    }

    //funcion para abatir las instancias del componente, estos se van a mostrar hasta hacer click en el boton
    toggleNombresHandler = () => {
        const doesShow = this.state.showClientes;
        this.setState({showClientes: !doesShow});
    }

    render(){

        //optimizando el metodo de visualizacion dinamica de los componentes

        let clientes = null;

        if(this.state.showClientes){
            clientes = (
                <div>
                    {/*map: mapea todos los elementos en un objeto, estilo vanillaJS */}
                    {this.state.persons.map(cliente => {
                        return <Nuevocliente5b nombre={cliente.nombre} 
                        edad={cliente.edad} />
                    })}
                </div>

            );
        }
        return(
            <div className="cajatipo1">
                <p>Uso de listas dinamicas</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}

                {/* cambiaremos a toggleNombresHandler para mostrar/ocultar los componentes Clientes */}
                <button onClick={this.toggleNombresHandler}>Switch Name1</button>
                {/* el codigo se ve mas limpio al hace referencia a la variable clientes
                */}
                {clientes}
            </div>    
        )
    }
}

export default verclientes1d;