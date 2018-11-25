import React, { Component } from 'react';
import Field from './Field';

class EstimatedTaxForm extends Component {
  constructor(props) {
    super(props);
    this.fields = this.props.fields.filter(field => !field.computed || field.formName === "custom")
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Some meaningful message here`);
  }

  displayFromState(field) {
    if (field.computed) {
      return this.props.appState[field.name].toFixed(2)
    } else {
      if (this.props.appState[field.name] === 0) {
        return ''
      } else {
        return this.props.appState[field.name]
      }
    }
  }

  render() {
    return (
      <div className='EstimatedTaxForm'>
        <h2>2018 Estimated Tax Worksheet</h2>
        <form onSubmit={this.handleSubmit}>
          {this.fields.map((field, i) =>
            <Field
              field={field}
              display={this.displayFromState(field)}
              key={i}
              handleChange={this.props.handleChange} />
          )}
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

    );
  }
}

export default EstimatedTaxForm;
