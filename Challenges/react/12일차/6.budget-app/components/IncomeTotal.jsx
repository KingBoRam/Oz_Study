import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils/index';

const IncomeTotal = () => {
  const { incomes } = useContext(AppContext);
  const totalIncomes = incomes.reduce((acc, cur) => {
    return (acc += cur.cost);
  }, 0);
  return (
    <div className="alert p-4 alert-primary">
      총 수익 : {formatNumberToWon(totalIncomes)}
    </div>
  );
};

export default IncomeTotal;
