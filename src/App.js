import React, { Component } from 'react';
import './App.css';
import EstimatedTaxForm from './EstimatedTaxForm';

import estimatedTaxFields from './data/estimatedTaxFields'
import taxTables from './data/taxTables'

import calculateTax from './calculateTax'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = estimatedTaxFields.reduce((state, field) => {
      state[field.name] = 0
      return state
    }, {})

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const changedFieldName = event.target.name
    const changedFieldValue = parseInt(event.target.value)
    this.setState((state, props) => {
      const updatedState = state
      if (isNaN(changedFieldValue)) {
        updatedState[changedFieldName] = 0
      } else {
        updatedState[changedFieldName] = changedFieldValue
      }
      estimatedTaxFields.forEach((field) => {
        if (field.computed) {
          // TODO: delegate field.op() call to somwhere else that can handle errors
          //       like references to non-existent field names. Or should we try
          //       to eliminate errors like this through a data validator?
          updatedState[field.name] = field.op(updatedState, taxTables, calculateTax)
        }
      })
      return updatedState
    });
  }

  render() {
    return (
      <div className='App-container'>
        <EstimatedTaxForm
          fields={estimatedTaxFields}
          handleChange={this.handleChange}
          appState={this.state} />
      </div>
    );
  }
}

export default App;
