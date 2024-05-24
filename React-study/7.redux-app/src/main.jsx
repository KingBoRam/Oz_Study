import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import { loggerMiddleware } from './middleware/index.jsx';
import { thunk } from 'redux-thunk';

const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(rootReducer, middleware);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App
    // onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    // onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
  </Provider>,
);
