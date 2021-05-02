import React, { Component } from 'react';
import ValidateText from './ValidateText';
import CharText from './CharText.js';
import Swal from 'sweetalert2';
import './hwork02.css';

/* general purpose:
1. Input any text
2. Validate its lenght (min and max)
3. Display each letter as a char
4. if the user clicks on each one, it has to be deleted
class based components

TODO:
1. update  the component to functional one
2. actualizar updateTxtHandler usando spreadOperator
3. link de referencia para el msgbox: https://levelup.gitconnected.com/simple-character-counter-in-react-js-f988c696c2fb
4. propTypes: https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/

*/
class TextMe extends Component{
    
    state = {
        myText: '',
    }

    //metodo para actualizar el contenido del textbox
    //se usa spreadOperator para no operar de manera directa el objeto
    updateTxtHandler = (event) => {
        //ejemplo de codigo mala practica y que no es ES6
        this.setState({
            myText: event.target.value,
        });
        /*
       const newText = [...this.state.myText]
       newText.myText = event.target.value
        */       
    }

    //funcion para borrar elementos de la lista
    deleteCharacterHandler = (indexDelete) => {
        //console.log("La letra que deseo borrar es: "+indexDelete)
        const charDelete = [...this.state.myText];
        charDelete.splice(indexDelete, 1);  
        Swal.fire({icon: 'success', text: 'The element was deleted'});
        const tmpCharDelete = charDelete.toString();
        //console.log("el contenido de tmpCharDelete es: "+tmpCharDelete)
        const updatedText = tmpCharDelete.split(',').join('')
        //console.log("el contenido de updatedText es: "+updatedText)
        this.setState({myText: updatedText})
    }

    //deprecated: only during dev stage
    //estamos seguros que el texto tiene al menos 1 caracter
    //la variable principal es myText
    //antes de eliminar elementos hacemos una copia con el spread operator
    displayArrayContent = () => {
        const letters = [...this.state.myText];
        //iterar todos los elementos del arreglo
        letters.map((letter, index) => {
            console.log("item: " + letter + ", index: "+index)
        });
    }

    render(){  
        return(
            <div className="cajatipo1">
                <h1>Homework02: Text2Chars</h1>
                <div>
                    <h3>Please type any text you want</h3>
                    <input type="text" width="80" placeholder="Type any text greater than 3 characters"
                    value={this.state.myText}
                    onChange={this.updateTxtHandler}
                    />
                    <h3>Using "state" to update this control simultaneously:</h3>
                    <label>{this.state.myText}</label> 
                    {this.state.myText.length>0 ?
                        <p>
                            <ValidateText myTxtLength={this.state.myText.length} />
                            {
                            this.state.myText.split('').map((letter, index) => {
                                return <CharText 
                                text2Char = {letter}
                                key = {index} //hice esto para quitar el warning de la consola
                                removeCharacter={() => this.deleteCharacterHandler(index)}
                                />
                            })                                
                            }
                        </p>
                        : null
                    }
                </div>
            </div>    
        )
    }
}

export default TextMe;