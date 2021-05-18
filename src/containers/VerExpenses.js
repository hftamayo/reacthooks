import ExpenseItem from '../components/Expenses/ExpenseItem';

function VerExpenses() {

    const expenses = [
        {
            id: 'e1', title: 'Car Insurances', amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e2', title: 'Case RGB', amount: 39.00,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e3', title: 'AiO', amount: 150.55,
            date: new Date(2021, 2, 28)
        },
    ];

    //Ctrtl+Shift+I = autoformatting

    return (
        <div>
            <h1>My expenses</h1>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}>
            </ExpenseItem>            
        </div>
    );
}

export default VerExpenses;