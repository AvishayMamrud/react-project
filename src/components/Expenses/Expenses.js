import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Chart from '../Chart/Chart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  let chartArr = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ];

  let xyz = filteredExpenses.reduce(
    (acc, curr) => {
      acc[curr.date.getMonth()].value += curr.amount;
      return acc;
    },
    chartArr
  );
  let maxValue = Math.max(...xyz.map(x => x.value));
  xyz = xyz.map(x => {return {...x, maxVal: maxValue};});
  // console.log(xyz);
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <Chart 
          points={xyz}
        />
        {filteredExpenses.map(expense => {
          return <ExpenseItem
            key={expense.title}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
