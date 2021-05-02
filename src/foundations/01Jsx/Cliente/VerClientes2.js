import React, { useState } from 'react';
import Nuevocliente5 from './NuevoCliente5';
import '../../App.css';
//uso de functional component implementando States
//hooks-> disponibles desde la version 16.8
//useState es un hook
const Verclientes2 = props => {
    /*personState y setPersonState pueden tener cualquier nombre
    estos son ejemplo de un destructuring del arreglo persons
    personState me da acceso a los elementos originales de persons
    setPersonsState sera un objeto que me va a permitir actualizarlos
    */
    const [personsState, setPersonsState] = useState({
        persons: [
            {nombre: 'Karl Malone', edad: 31},
            {nombre: 'David Robinson', edad: 32},            
            {nombre: 'Dikembe Mutombo', edad: 33}
        ]
    });
    
    //puedo tener tantos states como sea necesario
    const [otherState, setOtherState] = useState('some other value');
    console.log(personsState, otherState);

    //funcion para actualizar los valores de state usando el boton
    const cambiarNombresHandler = () => {
        //cambiarNombresHandler ejecutará a setPersonsState
        setPersonsState({
            persons: [
                {nombre: 'John Stockton', edad: 25},
                {nombre: 'Dennis Rodman', edad: 26},            
                {nombre: 'Lebron James', edad: 27}
            ]
        });
    };  
    
    return(
        <div className="cajatipo2">
            <p>Uso de functional components y states</p>
            {/*si uso this.cambiaNombresHandler() cuando se dibuje el DOM
            inmediatamente se va a ejecutar. Si parentesis es una referencia*/}
            <button onClick={cambiarNombresHandler}>Switch Name2</button>
            <Nuevocliente5 nombre={personsState.persons[0].nombre} edad={personsState.persons[0].edad}>Equipo: Jazz</Nuevocliente5>
            <Nuevocliente5 nombre={personsState.persons[1].nombre} edad={personsState.persons[1].edad}>Equipo: Spurs</Nuevocliente5>            
            <Nuevocliente5 nombre={personsState.persons[2].nombre} edad={personsState.persons[2].edad}>Equipo: Cavs</Nuevocliente5>                            
        </div>    
    )
}

export default Verclientes2;



