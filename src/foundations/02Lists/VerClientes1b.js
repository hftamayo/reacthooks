import React, { Component } from 'react';
import Nuevocliente5b from './NuevoCliente5b';
import '../App.css';
//uso de class based component implementando States
//leccion 46: paso de referencias entre componentes
class verclientes1b extends Component{
    
    state = {
        persons: [
            {nombre: 'Irving Jhonson', edad: 40},
            {nombre: 'Isaiah Thomas', edad: 38},            
            {nombre: 'Charles Barkley', edad: 26}
        ],
        showClientes: false
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

    //funcion para abatir las instancias del componente, estos se van a mostrar hasta hacer click en el boton
    toggleNombresHandler = () => {
        const doesShow = this.state.showClientes;
        this.setState({showClientes: !doesShow});
    }

    render(){
        return(
            <div className="cajatipo1">
                <p>Uso de listas dinamicas</p>
                {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
                inmediatamente se va a ejecutar. Si parentesis es una referencia*/}

                {/* cambiaremos a toggleNombresHandler para mostrar/ocultar los componentes Clientes */}
                <button onClick={this.toggleNombresHandler}>Switch Name1</button>
                {/* empotrar los componentes en un div nos permitirá abatirlos en forma de persianas 
                empotramos el div dentro de un if para determinar si se despliega
                */}
                {this.state.showClientes ? 
                    <div>
                        <Nuevocliente5b 
                        nombre={this.state.persons[0].nombre} 
                        edad={this.state.persons[0].edad}
                        cambiartxt={this.actualizarNombresHandler}                                
                        >Equipo: Lakers
                        </Nuevocliente5b>
                        
                        {/*El prop actNombre puede ser cualquier otro nombre */}
                        <Nuevocliente5b 
                        nombre={this.state.persons[1].nombre} 
                        edad={this.state.persons[1].edad}
                        actNombre={this.cambiaNombresHandler}
                        cambiartxt={this.actualizarNombresHandler}
                        >Equipo: Pistons
                        </Nuevocliente5b>            
                        
                        <Nuevocliente5b 
                        nombre={this.state.persons[2].nombre} 
                        edad={this.state.persons[2].edad}>Equipo: Suns
                        </Nuevocliente5b>                            
                    </div> : null
                } {/*fin del if showClientes */}

            </div>    
        )
    }
}

export default verclientes1b;