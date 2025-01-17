import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import EditBudget from '../components/EditBudget';
import ViewBudget from '../components/ViewBudget';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="alert alert-primary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget
          budget={budget}
          setIsEditing={setIsEditing}
          dispatch={dispatch}
        ></EditBudget>
      ) : (
        <ViewBudget budget={budget} setIsEditing={setIsEditing}></ViewBudget>
      )}
    </div>
  );
};

export default Budget;
