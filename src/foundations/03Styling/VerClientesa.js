import React, { Component } from 'react';
import Nuevoclientea from './NuevoClientea';
import './styles.css';
//uso de list y states
//uso del param key para crear una flexible list
//flexibleList: 1. ya no lanza el warning, 2. puedo actualizar nombre por objeto

class verclientesa extends Component{
    
    state = {
        persons: [
            {id: '01', nombre: 'Irving Jhonson', edad: 40},
            {id: '02', nombre: 'Isaiah Thomas', edad: 38},            
            {id: '03', nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
    }

    //se elimina cambiarNombresHandler por quedar deprecado

    actualizarNombresHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //esto es una op directa, mala practica const person = this.state.persons[personIndex];
        const person = {
            ...this.state.persons[personIndex]
        };

        person.nombre = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }//fin de actualizarNombreHandler

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
                        return <Nuevoclientea 
                        actNombre={() => this.deletePersonHandler(index)}
                        nombre={cliente.nombre} 
                        edad={cliente.edad}
                        key={cliente.id} 
                        cambiartxt={(event) => this.actualizarNombresHandler(event, cliente.id)}
                        />
                    })}
                </div>

            );
        }
        //red y bold son nombre de clases en styles.css
        const classes = []; 
        if(this.state.persons.length <= 2){
            classes.push('red'); // classes = ['red']
        }
        if(this.state.persons.length <= 1){
            classes.push('bold'); //classes = ['red', 'bold']
        }


        return(
            <div className="cajatipo1">
                <p className={classes.join(' ')}>Uso de listas dinamicas</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}

                {/* cambiaremos a toggleNombresHandler para mostrar/ocultar los componentes Clientes */}
                <button className="boton" onClick={this.toggleNombresHandler}>Switch Name1</button>
                {/* el codigo se ve mas limpio al hace referencia a la variable clientes
                */}
                {clientes}
            </div>    
        )
    }
}

export default verclientesa;