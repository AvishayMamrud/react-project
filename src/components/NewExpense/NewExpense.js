import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {clicked 
      ? <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHandler={() => setClicked(() => !clicked)}
        />
      : <button onClick={() => setClicked(() => !clicked)}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
