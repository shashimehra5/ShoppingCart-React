import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import { Provider } from './context';
import Basket from './components/Basket'

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="container">
        <header>
          <Header logo={logo}/>
        </header>
        <Products />
      </div>
      <Basket />
      </Provider>
    );
  }
}

export default App;
