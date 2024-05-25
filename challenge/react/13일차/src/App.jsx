import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick, handleTimeoutClick } from './redux/action';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count : {counter}</h1>
      <button
        onClick={() => {
          dispatch(handleClick());
        }}
      >
        즉시 +1
      </button>
      <button
        onClick={() => {
          dispatch(handleTimeoutClick());
        }}
      >
        1초 후 +1
      </button>
    </>
  );
}

export default App;
