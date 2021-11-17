import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { AuthContextProvider } from './components/LoginUsers/store/auth-context';
import { Provider } from 'react-redux';
// redux part1: import store from './store/index';
import store from './storeshop/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

