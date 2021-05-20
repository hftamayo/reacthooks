import './Expenses.css';
import ExpenseItemV2 from './ExpenseItemV2';

function Expenses(props) {
    return (
        <div className="expenses">
            <div>
                <ExpenseItemV2
                    title={props.records[0].title}
                    amount={props.records[0].amount}
                    date={props.records[0].date}>
                </ExpenseItemV2>
            </div>
            <div>
                <ExpenseItemV2
                    title={props.records[1].title}
                    amount={props.records[1].amount}
                    date={props.records[1].date}>
                </ExpenseItemV2>
            </div>
            <div>
                <ExpenseItemV2
                    title={props.records[2].title}
                    amount={props.records[2].amount}
                    date={props.records[2].date}>
                </ExpenseItemV2>
            </div>
            <div>
                <ExpenseItemV2
                    title={props.records[3].title}
                    amount={props.records[3].amount}
                    date={props.records[3].date}>
                </ExpenseItemV2>
            </div>
        </div>
    );
}

export default Expenses;




