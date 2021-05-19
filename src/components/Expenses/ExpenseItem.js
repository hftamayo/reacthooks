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
   const month = data.date.toLocaleString('en-US', {month: 'long'});
   const day = data.date.toLocaleString('en-US', {day: '2-digit'});   
   const year = data.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
                </div>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;