import React, { Component } from 'react';
import './App.css';
import SelfEmploymentForm from './SelfEmploymentForm';
import selfEmploymentFields from './data/selfEmploymentFields'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App-container'>
        <h2>2018 Self-Employment Tax and Deduction Worksheet</h2>
        <SelfEmploymentForm fields={selfEmploymentFields} />
      </div>
    );
  }
}

export default App;
