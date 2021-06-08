import React, { useState } from 'react';
import './Expenses.css';
//import ExpenseItemV2 from './ExpenseItemV2';
import ExpenseItemV3 from './ExpenseItemV3';
import Card from '../UI/Card';
import ExpenseFilter from './NewExpense/ExpensesFilter';

const Expenses = (props) => {
    const [year, setYear] = useState(props.year);
    return (
        <div>
            <ExpenseFilter />
            <Card className="expenses">
                <div>
                    <ExpenseItemV3
                        title={props.records[0].title}
                        amount={props.records[0].amount}
                        date={props.records[0].date}>
                    </ExpenseItemV3>
                </div>
                <div>
                    <ExpenseItemV3
                        title={props.records[1].title}
                        amount={props.records[1].amount}
                        date={props.records[1].date}>
                    </ExpenseItemV3>
                </div>
                <div>
                    <ExpenseItemV3
                        title={props.records[2].title}
                        amount={props.records[2].amount}
                        date={props.records[2].date}>
                    </ExpenseItemV3>
                </div>
                <div>
                    <ExpenseItemV3
                        title={props.records[3].title}
                        amount={props.records[3].amount}
                        date={props.records[3].date}>
                    </ExpenseItemV3>
                </div>
            </Card>
        </div>

    );
}

export default Expenses;




