import React, { Component } from 'react';
import Nuevocliente5b from './NuevoCliente5b';
import '../App.css';
//uso de list y states
//removing elements from a list using immutability 
//(make a copy of the object first) using spread operator
//adding key and value elements to the list
//the field id was added to persons list

class verclientes1e extends Component{
    
    state = {
        persons: [
            {id: '01', nombre: 'Irving Jhonson', edad: 40},
            {id: '02', nombre: 'Isaiah Thomas', edad: 38},            
            {id: '03', nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
    }

    //se elimina cambiarNombresHandler por quedar deprecado

    actualizarNombresHandler = (event) => {
        this.setState({
            persons: [
                {nombre: event.target.value, edad: 1},
                {nombre: event.target.value, edad: 33},            
                {nombre: 'La Lakers', edad: 5}
            ]
        })
    }

    //funcion para borrar elementos de la lista
    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();//hace una copia del objeto original
        //antes de eliminar el objeto hacemos una copia con el spread operator
        const persons = [...this.state.persons];
        //esta es una mala practica puesto que opera el objeto original
        persons.splice(personIndex, 1);  
        this.setState({persons: persons})
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
                    {/*map: mapea todos los elementos en un objeto, estilo vanillaJS 
                    index ayuda a identificar que cliente borrar
                    */}
                    {this.state.persons.map((cliente, index) => {
                        return <Nuevocliente5b 
                        actNombre={() => this.deletePersonHandler(index)}
                        nombre={cliente.nombre} 
                        edad={cliente.edad}
                        key={cliente.id} 
                        />
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

export default verclientes1e;