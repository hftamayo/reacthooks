import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //no puedo llamar useState mas de una vez
    //el evento onChange interpreta todo como string
//    const [enteredTitle, setEnteredTitle] = useState('');
//    const [enteredAmount, setEnteredAmount] = useState('');
//    const [enteredDate, setEnteredDate] = useState('');
const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});

    const titleChangeHandler = (event) => {
        //imprimir conforme el usuario escribe
        console.log(event.target.value);
        //si ignoro los otros 2 objetos se van a sobreescribir
        //por eso uso el spread operator
        //para recuperar su valor
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        
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

    return <form>
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