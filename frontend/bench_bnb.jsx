import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, logIn, logOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.signUp = signUp;
  window.logIn = logIn;
  window.logOut = logOut;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
