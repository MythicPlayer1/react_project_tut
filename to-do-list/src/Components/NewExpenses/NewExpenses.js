import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css';

const NewExpenses = (props) => {
  
  const sendExpenseData=(GetExpenseData)=>{
    const newExpense={
      ...GetExpenseData,
      id:Math.random().toString()
    }
    props.getNewExpense(newExpense)
    console.log(newExpense);
   
  }

  return (
   
    <div className="NewExpenses">
      <ExpenseForm onsaveExpenseData={sendExpenseData}/>
    </div>
  )
}

export default NewExpenses;