import React, { Component } from 'react';
import Field from './Field';
import taxTables from './data/taxTables'
import calculateTax from './calculateTax'

class EstimatedTaxForm extends Component {
  constructor(props) {
    super(props);

    this.fields = props.fields;

    this.state = this.fields.reduce((state, field) => {
      state[field.name] = 0
      return state
    }, {})

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.fields.forEach((field) => {
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

  handleSubmit(event) {
    event.preventDefault();
    alert(`Some meaningful message here`);
  }

  displayFromState(field) {
    if (field.computed) {
      return this.state[field.name].toFixed(2)
    } else {
      if (this.state[field.name] === 0) {
        return ''
      } else {
        return this.state[field.name]
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.fields.map((field, i) =>
          <Field
            field={field}
            display={this.displayFromState(field)}
            key={i}
            handleChange={this.handleChange} />
        )}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>      
    );
  }
}

export default EstimatedTaxForm;
