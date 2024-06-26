import { createContext, useReducer } from 'react';

export const AppContext = createContext();

// export const AppContextProvider = (props) => {
//   return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
// };

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'ADD_INCOMES':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    case 'DELETE_INCOMES':
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [
    { id: crypto.randomUUID(), name: '밥먹기', cost: 1000 },
    { id: crypto.randomUUID(), name: '카드비', cost: 3000 },
    { id: crypto.randomUUID(), name: '교통비', cost: 7000 },
  ],
  incomes: [
    { id: crypto.randomUUID(), name: '월급', cost: 100000 },
    { id: crypto.randomUUID(), name: '당근', cost: 20000 },
  ],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        incomes: state.incomes,
        dispatch,
      }}
      {...props}
    />
  );
};
