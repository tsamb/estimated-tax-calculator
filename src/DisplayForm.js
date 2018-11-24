import React, { Component } from 'react';
import Field from './Field';
import taxTables from './data/taxTables'
import calculateTax from './calculateTax'

class EstimatedTaxForm extends Component {
  constructor(props) {
    super(props);
    this.fields = props.fields.filter(field => field.formName !== "custom");
  }

  displayFromState(field) {
    if (field.computed) {
      return this.props.appState[field.name].toFixed(2)
    } else {
      if (this.props.appState[field.name] === 0) {
        return '0'
      } else {
        return this.props.appState[field.name]
      }
    }
  }

  render() {
    return (
      <div className='DisplayForm'>
        <h2>2018 Estimated Tax Worksheet</h2>
        <form onSubmit={this.handleSubmit}>
          {this.fields.map((field, i) =>
            <Field
              field={field}
              display={this.displayFromState(field)}
              key={i}
              forceDisable={true} />
          )}
        </form>
      </div>

    );
  }
}

export default EstimatedTaxForm;
