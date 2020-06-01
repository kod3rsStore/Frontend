import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const initialState = {
  "user":{},
  "shopping_cart":[
    {
      "id_products": "oDaGKs0vb3qY2lYcrfYXw",
      "title": "lather belt",
      "description": "accesories made for leather lovers",
      "url": "https://cdn.pixabay.com/photo/2015/06/24/01/15/morning-819362_960_720.jpg",
      "alt": "photo lether belt",
      "cost": 60000,
      "quantity": 106,
      "available": 1,
      "pcs":1,
      "id_categories": "8RM9U-ouzTTvGThIqoKOl",
      "score": 0
    }
  ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
