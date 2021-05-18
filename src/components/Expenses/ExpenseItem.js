import './ExpenseItem.css';


function ExpenseItem(data) {
    /*gralmente usamos props pero en realidad la variable 
    puede llamarse de cualquier manera */

    //2->march, 0->january
    /*
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    */
    return (
        <div className="expense-item">
            <div>{data.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;