import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //no puedo llamar useState mas de una vez
    //el evento onChange interpreta todo como string
    /*less 56: regresamos a multistate */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
/*
const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});
*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //imprimir conforme el usuario escribe
        console.log(event.target.value);
        //si ignoro los otros 2 objetos se van a sobreescribir
        //por eso uso el spread operator
        //para recuperar su valor
        /*
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        */
       //lesson 55: updating depending of prevstate
       /*
       en este enfoque se garantiza que cada updateSchedule sera ejecutado
       sin equivocaciones o retrasos
       usando prevState es el enfoque más seguro
       */
      /* lession 56: regresamos al multiState
       setUserInput((prevState) => {
           return { ...prevState, enteredTitle: event.target.value };
       });
       */
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });        
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
            
        });
    };

    //este metodo gestiona por si el proceso de submit
    //pero parseando las variables como yo quiero

    const submitHandler = (event) => {
        //previene la ejecucion por default submit
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //esto es temporal hasta tener afinada la function, lesson 57
        console.log(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                    onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"
                    min="0.01" step="0.01"
                    onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"
                    min="2019-01-01"
                    max="2020--12-31"
                    onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">
                    Add Expense
                </button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;