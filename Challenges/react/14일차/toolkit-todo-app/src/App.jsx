import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [selected, setSelected] = useState('all');

  const todos = useSelector((state) => {
    if (selected === 'all') {
      return state.todos;
    } else if (selected === 'complated') {
      return state.todos.filter((todo) => {
        return todo.completed === true;
      });
    } else if (selected === 'unfinished') {
      return state.todos.filter((todo) => {
        return todo.completed === false;
      });
    }
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length !== 0) {
      dispatch(addTodo(text));
    }
    setText('');
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };
  const handleEditCancle = () => {
    setEditId(null);
    setEditText('');
  };
  const handleEditSave = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo({ id: editId, newText: editText }));
    }
    setEditId(null);
    setEditText('');
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <span> Filter : </span>
        <select name="filter" id="filter" onChange={handleSelect}>
          <option value="all">All</option>
          <option value="complated">Complated</option>
          <option value="unfinished">Unfinished</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id === editId ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => {
                      setEditText(e.target.value);
                    }}
                  ></input>
                  <button onClick={handleEditSave}>Save</button>
                  <button onClick={handleEditCancle}>Cancel</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                      dispatch(toggleTodo(todo.id));
                    }}
                  />
                  <span>{todo.text}</span>
                  <button onClick={() => handleEdit(todo.id, todo.text)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
