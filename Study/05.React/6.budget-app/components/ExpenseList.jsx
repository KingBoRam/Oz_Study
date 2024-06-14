import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import ExpenseItem from '../components/ExpenseItem';

const ExpenseList = () => {
  console.log('랜더링됨');
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (e) => {
    const searchResults = expenses.filter((expense) => {
      return expense.name.toLowerCase().includes(e.target.value);
    });
    setFilteredExpenses(searchResults);
  };
  console.log(expenses);
  console.log(filteredExpenses);
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="검색하기..."
        onChange={handleChange}
      ></input>
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            ></ExpenseItem>
          );
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
