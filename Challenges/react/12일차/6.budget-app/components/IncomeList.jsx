import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import IncomeItem from './IncomeItem';

const IncomeList = () => {
  const { incomes } = useContext(AppContext);

  return (
    <ul className="list-group mt-3 mb-3">
      {incomes.map((income) => {
        return (
          <IncomeItem
            key={income.id}
            name={income.name}
            cost={income.cost}
            id={income.id}
          ></IncomeItem>
        );
      })}
    </ul>
  );
};

export default IncomeList;
