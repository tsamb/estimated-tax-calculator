import React, { Component } from 'react';
import './App.css';
import EstimatedTaxForm from './EstimatedTaxForm';
import estimatedTaxFields from './data/estimatedTaxFields'


class App extends Component {
  render() {
    return (
      <div className='App-container'>
        <h2>2018 Estimated Tax Worksheet</h2>
        <EstimatedTaxForm fields={estimatedTaxFields} />
      </div>
    );
  }
}

export default App;
