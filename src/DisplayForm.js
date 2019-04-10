import React, { Component } from 'react';
import Field from './Field';
import taxTables from './data/taxTables2018'
import calculateTax from './calculateTax'

class EstimatedTaxForm extends Component {
  constructor(props) {
    super(props);
    this.fields = props.fields.filter(field => field.formName !== "custom");
  }

  displayFromState(field) {
    return this.props.appState[field.name].toFixed(2)
  }

  render() {
    return (
      <div className='DisplayForm'>
        <h2>2018 Estimated Tax Worksheet</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              {this.fields.map((field, i) =>
                <tr key={field.name}>
                  <td><span className='DisplayForm-number'>{field.name}. </span>{field.instruction}</td>
                  <td>
                  <input
                    disabled={true}
                    value={this.displayFromState(field)}
                    className='DisplayForm-field' />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
      </div>

    );
  }
}

export default EstimatedTaxForm;
