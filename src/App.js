import React, { Component } from 'react';
import './App.css';
import SelfEmploymentForm from './SelfEmploymentForm';
import selfEmploymentFields from './data/selfEmploymentFields'
import estimatedTaxFields from './data/estimatedTaxFields'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App-container'>
        <h2>2018 Self-Employment Tax and Deduction Worksheet</h2>
        <SelfEmploymentForm fields={selfEmploymentFields} />
        <h2>2018 Estimated Tax Worksheet</h2>
        <SelfEmploymentForm fields={estimatedTaxFields} />
      </div>
    );
  }
}

export default App;
