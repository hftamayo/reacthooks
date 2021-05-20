//import ExpenseItem from '../components/Expenses/ExpenseItem';
import Expenses
    from '../components/Expenses/Expenses';

function VerExpensesV2() {

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

    //Ctrtl+Shift+I = autoformatting

    return (
        <div>
            <h1>My expenses</h1>
            {/* assignment 1 */}
            <Expenses
                records={expenses}>
            </Expenses>

        </div>
    );
}

export default VerExpensesV2;