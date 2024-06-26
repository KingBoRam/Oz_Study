import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const AddIncomeForm = () => {
  const [value, setValue] = useState('');
  const [number, setNumber] = useState(0);

  const { dispatch } = useContext(AppContext);

  const handleAdd = () => {
    dispatch({
      type: 'ADD_INCOMES',
      payload: { id: crypto.randomUUID(), name: value, cost: Number(number) },
    });
    setValue('');
    setNumber(0);
  };

  return (
    <>
      <div className="row">
        <div>
          <label>수입 내용</label>
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label>비용</label>
          <input
            className="form-control"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3 mb-3">
        <button className="btn btn-primary" onClick={handleAdd}>
          추가
        </button>
      </div>
    </>
  );
};

export default AddIncomeForm;
