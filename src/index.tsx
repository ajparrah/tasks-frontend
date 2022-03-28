import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './globals/store';
import './index.css';
import Dashboard from './views/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
