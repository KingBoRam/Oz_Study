import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: '콜라', amount: 2000 },
    { id: 2, charge: '빵', amount: 1000 },
    { id: 3, charge: '맥북', amount: 20000 },
  ]);
  const handleDelete = (id) => {
    const newExpenses = expenses.filter((v) => {
      return v.id !== id;
    });
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
  };

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState('');
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' });
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        console.log(newExpense);
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
      }
      setCharge('');
      setAmount(0);
    } else {
      console.error('error');
      handleAlert({
        type: 'danger',
        text: '상품과 가격을 다시 확인해주세요. 빈 값일 수 없습니다.',
      });
    }
  };

  const [alert, setAlert] = useState({ show: false });
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const [edit, setEdit] = useState(false);
  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    console.log(expense);
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  };

  const clearItem = () => {
    setExpenses([]);
  };

  return (
    <main className="main-container">
      <div className="sub-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>장바구니</h1>
        <div
          style={{
            width: '100 %',
            backgroundColor: 'white',
            padding: '1rem',
          }}
        >
          {/*expense form*/}
          <ExpenseForm
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            edit={edit}
          ></ExpenseForm>
        </div>
        <div
          style={{
            width: '100 %',
            backgroundColor: 'white',
            padding: '1rem',
          }}
        >
          {/*expense list*/}
          <ExpenseList
            initialExpenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItem={clearItem}
            expenses={expenses}
          ></ExpenseList>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            marginTop: '1rem',
          }}
        >
          <p style={{ fontSize: '2rem' }}>
            총합계:
            {expenses.reduce((acc, cur) => {
              return (acc += Number(cur.amount));
            }, 0)}
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
