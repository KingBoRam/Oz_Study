import React from 'react';
import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils';

const IncomeItem = ({ name, cost, id }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_INCOMES', payload: id });
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      id={id}
    >
      {name}
      <div>
        <span className="badge bg-secondary me-3">
          {formatNumberToWon(cost)}
        </span>
        <TiDelete size={'1.5em'} onClick={handleDelete}></TiDelete>
      </div>
    </li>
  );
};

export default IncomeItem;
