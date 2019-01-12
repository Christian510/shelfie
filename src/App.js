import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/dashboard/Dashboard.js';
import Form from './component/form/Form.js';
import Header from './component/header/Header.js';
import Product from './component/product/Product.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Dashboard>
          <Product />
        </Dashboard>
        <Form />
       
      </div>
    );
  }
}

export default App;
