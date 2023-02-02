import react, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    var info;

    const [newtitle, setTitle] = useState();
    const [newamount,setAmount]=useState();
    const [newdate,setdate]= useState();

    const titlechangehandler = (event) => {
        setTitle(event.target.value)
    }
    const amountchangehandler=(event)=>{
        setAmount(event.target.value)

    }
    const datechangehandler=(event)=>{
        setdate(event.target.value)
    }

    const submithandler=(event)=>{
        event.preventDefault()
        const Expenses={
            title:newtitle,
            amount: newamount,
            date:new Date(newdate)
        }



        props.onsaveExpenseData(Expenses);
        console.log(Expenses);

        setTitle('');
        setAmount('');
        setdate('')
        
    }

   

    return (
        <form onSubmit={submithandler}>
            <div className="ExpenseForm ">
                <div className="innerForm1">
                    <label>Title</label>
                    <input type="text" onChange={titlechangehandler} placeholder="Expeneses" value={newtitle}/>
                </div>
                <div className="innerForm1">
                    <label>Price</label>
                    <input type="number" onChange={amountchangehandler} min="0.01" step="0.01" value={newamount}/>
                </div>
                <div className="innerForm1">
                    <label>Date</label>
                    <input type="date" onChange={datechangehandler} value={newdate}/>
                </div>
            </div>
            <div className="NewExpense_btn">
                <button type='submit'>SUBMIT</button>
            </div>

        </form>
    )
}

export default ExpenseForm;  