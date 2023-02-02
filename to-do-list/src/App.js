
import './App.css'
import Expenses from "./Components/Expense/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import { useState,useEffect } from "react";


const DUMMY_EXPENSE = [
    //  {
    //     id: '1',
    //     date: new Date(2077, 3, 22),
    //     title: 'Grocery',
    //     amount  : '$300'
    //  },
    // {
    //     id: '2',
    //     date: new Date(2077, 3, 22),
    //     title: 'Car Insurance',
    //     amount: '$2300'
    // },
    // {
    //     id: '3',
    //     date: new Date(2077, 5, 6),
    //     title: 'School Fee',
    //     amount: '$800'
    // },
    // {
    //     id: '4',
    //     date: new Date(2078, 7, 12),
    //     title: 'Rent',
    //     amount: '$600'
    // },
    // {
    //     id: '5',
    //     date: new Date(2077, 3, 9),
    //     title: 'Driking Water',
    //     amount: '$200'
    // },
    // {
    //     id: '1',
    //     date: new Date(2077, 3, 22),
    //     title: 'Grocery',
    //     amount: '$300'
    // },
    // {
    //     id: '6',
    //     date: new Date(2079, 2, 4),
    //     title: 'Electricity Bill',
    //     amount: '$765'
    // },
];

function App() {
   

    // let expenseDate = new Date(2022, 1, 12);
    // let expenseTitle = 'Life Insurance';
    // let expensePrice = '£300'
    useEffect(()=>{
        fetch('https://techgun.website/sample/api/create.php').then(
            response =>{
                return response.json();
            }
        ).then(
            data =>{
                console.log(data)
                setExpenses(expenses)
            }
        )
    },[])


    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  
     function onAddNewExpenseHandler(expense) {
         const updatedExpense =[expense,...expenses];
         setExpenses(updatedExpense)
         console.log(expense)
         
     }


        return (
            <div className="main-Container">

                <NewExpenses getNewExpense={onAddNewExpenseHandler} />
                <div className="main">
                    <Expenses
                        item={expenses}
                    ></Expenses>
                </div>
            </div>
        );
    }

export default App;