import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import fetchPosts from './actions/post';

function App() {
  const counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const [todoValue, setTodoValue] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue });
  };

  return (
    <div className="App">
      <div>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
          {todos.map((item) => {
            return <li key={crypto.randomUUID()}>{item}</li>;
          })}
        </ul>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
      <div>
        Clicked :{counter} times
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
