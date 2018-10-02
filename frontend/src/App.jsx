import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Root from './components/root';
import logo from './logo.svg';
import './App.css';

const App = ({ store }) => {
  <Provider store={store}>
    <HashRouter>
      <Root/>
    </HashRouter>
  </Provider>
};

export default App;
