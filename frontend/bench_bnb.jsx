import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signUp, logIn, logOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //testing start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
