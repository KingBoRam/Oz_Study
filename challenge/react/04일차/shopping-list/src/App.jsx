import './App.css';
import { FaCartShopping } from 'react-icons/fa6';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

function App() {
  const products = [
    { id: 1, charge: '콜라', amount: 2000 },
    { id: 2, charge: '빵', amount: 1000 },
    { id: 3, charge: '맥북', amount: 20000 },
  ];
  return (
    <>
      <main className="container">
        <div className="contents">
          <div className="header-content">
            <FaCartShopping className="cart-icon" />
            <h1>장바구니</h1>
          </div>
          <div className="input-field">
            <ShoppingForm />
          </div>
          <div className="list-field">
            <ShoppingList />
          </div>
          <div className="total-price">
            <p>총 합 : </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
