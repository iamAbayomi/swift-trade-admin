import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store'
import { fetchUsers } from './reducers/UsersSlice';
import { getAllTransactionsFromAPI } from './reducers/TransactionsSlice';
import { getAllAppData } from './classes/Utilities';

//This get all the data needed for the application
getAllAppData(store)

ReactDOM.render(
  <React.StrictMode>  
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
