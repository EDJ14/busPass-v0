import './scss/_main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './App';

import axios from 'axios';
window.axios = axios;

/*const store = createStore(
  reducers,
  { postNumber: 0, posts: [] },
  applyMiddleware(reduxThunk)
);*/

ReactDOM.render(
  //<Provider store={store}>
  <App />,
  //</Provider>,
  document.querySelector('#root')
);

export default hot(module)(App);
