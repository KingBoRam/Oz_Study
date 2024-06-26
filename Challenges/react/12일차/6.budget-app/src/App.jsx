import './App.css';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseList from '../components/ExpenseList';
import AddExpenseForm from '../components/AddExpenseForm';
import IncomeList from '../components/IncomeList';
import AddIncomeForm from '../components/AddIncomeForm';
import IncomeTotal from '../components/IncomeTotal';
import Remaining from '../components/Remaining';

function App() {
  return (
    <div className="container">
      <h1 className="mt-3">가 계 부</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Remaining></Remaining>
        </div>
        <div className="col-sm">
          <IncomeTotal></IncomeTotal>
        </div>
        <div className="col-sm">
          <ExpenseTotal></ExpenseTotal>
        </div>
      </div>
      <h3 className="mt-3">수입 목록</h3>
      <div className="row">
        <div className="col-sm">
          <IncomeList></IncomeList>
        </div>
      </div>
      <h3 className="mt-3">수입 추가</h3>
      <div className="row">
        <div className="col-sm">
          <AddIncomeForm></AddIncomeForm>
        </div>
      </div>
      <hr></hr>
      <h3 className="mt-3">지출 목록</h3>
      <div className="row">
        <div className="col-sm">
          <ExpenseList></ExpenseList>
        </div>
      </div>
      <h3 className="mt-3">지출 추가</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm></AddExpenseForm>
        </div>
      </div>
    </div>
  );
}

export default App;
