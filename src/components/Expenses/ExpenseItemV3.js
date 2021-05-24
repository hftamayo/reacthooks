import React, { useState } from 'react';
//lesson39: children props
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItemV3 = (data) => {
    /* sin el uso de states el componente nunca se actualizaría
    let title = props.title;    
    const clickHandler = () =>{
        title = "updated";
    };
    */
   //hay que usar un arrayDestructuring para gestionar el state de la var
    const [title, setTitle] = useState(data.title);

    const clickHandler = () =>{
        setTitle('Updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
            {/* si pongo clickHandler() la funcion se ejecuta cuando 
            el control se renderiza*/}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItemV3;