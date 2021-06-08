//sect4: final asignment
//import ExpenseItem from '../components/Expenses/ExpenseItem';
import NewExpense
    from '../components/Expenses/NewExpense/NewExpense';
import Expenses
    from '../components/Expenses/Expenses';

const VerExpensesV3 = () => {

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
        {
            id: 'e4', title: 'HDD NVme', amount: 85.50,
            date: new Date(2021, 3, 15)
        },
    ];

    const addExpenseHandler = expense => {
        console.log("from VerExpensesV2");
        console.log(expense);

    };

    //Ctrtl+Shift+I = autoformatting

    return (
        <div>
            <h1>My expenses</h1>
            <NewExpense
                onAddExpense={addExpenseHandler} />
            <Expenses
                records={expenses} />
        </div>
    );
}

export default VerExpensesV3;