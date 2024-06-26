import './App.css';
import { FaCartShopping } from 'react-icons/fa6';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [products, setProducts] = useState([
    { id: 1, product: '콜라', price: 2000 },
    { id: 2, product: '빵', price: 1000 },
    { id: 3, product: '맥북', price: 20000 },
  ]);
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);

  const handleDelete = function (id) {
    const newProducts = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(newProducts);
    handleAlert({ type: 'danger', text: '상품을 목록에서 삭제하였습니다.' });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (product !== '' && price !== 0) {
      if (edit) {
        const newProducts = products.map((item) => {
          return item.id === id ? { ...item, product, price } : item;
        });
        setProducts(newProducts);
        setEdit(false);
        handleAlert({ type: 'success', text: '상품 정보를 수정하였습니다' });
      } else {
        const newProduct = { id: new Date().getTime(), product, price };
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
        handleAlert({ type: 'success', text: '상품을 추가하였습니다' });
      }
      setProduct('');
      setPrice(0);
    } else {
      console.error('error');
      handleAlert({
        type: 'danger',
        text: '상품과 가격을 다시 확인해주세요. 빈 값일 수 없습니다.',
      });
    }
  };
  const handleClear = function () {
    setProducts([]);
  };
  const handleEdit = function (id) {
    const editProduct = products.find((item) => item.id === id);
    const { product, price } = editProduct;
    setProduct(product);
    setPrice(price);
    setId(id);
    setEdit(true);
  };
  const [alert, setAlert] = useState({ show: false });
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  return (
    <>
      <main className="container">
        <div className="contents">
          {alert.show === true ? (
            <Alert type={alert.type} text={alert.text} />
          ) : null}
          <div className="header-content">
            <FaCartShopping className="cart-icon" />
            <h1>장바구니</h1>
          </div>
          <div className="input-field">
            <ShoppingForm
              handleSubmit={handleSubmit}
              product={product}
              setProduct={setProduct}
              price={price}
              setPrice={setPrice}
              edit={edit}
            />
          </div>
          <div className="list-field">
            <ShoppingList
              products={products}
              setProducts={setProducts}
              handleDelete={handleDelete}
              handleClear={handleClear}
              handleEdit={handleEdit}
            />
          </div>
          <div className="total-price">
            <p>
              <span style={{ color: 'black' }}>총 합 </span>:{' '}
              {products.reduce((acc, cur) => {
                return (acc += Number(cur.price));
              }, 0)}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
