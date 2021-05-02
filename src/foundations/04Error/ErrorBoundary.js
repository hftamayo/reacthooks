/*
Este tipo de componentes envuelven a otro para cachar
y gestionar los posibles errores, se desaconseja su uso
ya que normalmente se usa para informar al usuario de un
evento inesperado y para actualizar bitacora de la 
aplicacion, sin embargo, hay otras formas en React
sobre como gestionar una rutina de errores
*/
import React, {Component} from 'react';
import Swal from 'sweetalert2';

class ErrorBoundary extends Component {
    state = {
        hasError : false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError){
            /* si se lanza un error y se gestiona con
            la siguiente linea, el h1 va a sobreescribir
            la aplicacion, en su lugar podemos usar un
            mensaje con sweetAlert
            return <h1>{this.state.errorMessage}</h1>;
            */
            return Swal.fire({icon: 'success', text: 'An error ocurred'});;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;