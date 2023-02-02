
import ExpenseItem from "./ExpenseItem";

import './ExpenseDate.css';
import './Expenses.css';
import Cards from "../UI/Cards";

function Expenses(props) {
    return (
        <Cards className="expenses" >
            <h1 >To-Do-list</h1>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} >
                        </ExpenseItem>

                    )
                    
                )
            
            }
            
            {/* <ExpenseItem
                date={props.expense[1].date}
                title={props.expense[1].title}
                price={props.expense[1].price} >
            </ExpenseItem>
            <ExpenseItem
                date={props.expense[2].date}
                title={props.expense[2].title}
                price={props.expense[2].price} >
            </ExpenseItem>
            <ExpenseItem
                date={props.expense[3].date}
                title={props.expense[3].title}
                price={props.expense[3].price} >
            </ExpenseItem>
            <ExpenseItem
                date={props.expense[4].date}
                title={props.expense[4].title}
                price={props.expense[4].price} >
            </ExpenseItem>
            <ExpenseItem
                date={props.expense[5].date}
                title={props.expense[5].title}
                price={props.expense[5].price} >
            </ExpenseItem>
            <ExpenseItem
                date={props.expense[6].date}
                title={props.expense[6].title}
                price={props.expense[6].price} >
            </ExpenseItem> */}
            {/* <ExpenseItem
                 date={item[2].date}
                 title={item[2].title}
                 price={item[2].price}>
            </ExpenseItem>
            <ExpenseItem
                 date={item[3].date}
                 title={item[3].title}
                 price={item[3].price} >
            </ExpenseItem>
            <ExpenseItem
                 date={item[4].date}
                 title={item[4].title}
                 price={item[4].price} >
            </ExpenseItem>
            <ExpenseItem
                date={item[5].date}
                title={item[5].title}
                price={item[5].price} >
            </ExpenseItem>
            <ExpenseItem
                date={item[6].date}
                title={item[6].title}
                price={item[6].price} >
            </ExpenseItem> */}
        </Cards>
    );

}

export default Expenses;