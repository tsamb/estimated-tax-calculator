import React, { Component } from 'react';

class SelfEmploymentForm extends Component {
  constructor(props) {
    super(props);

    this.fields = props.fields;

    this.state = {}
    this.fields.forEach(field => this.state[field.name] = 0)

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
          updatedState[field.name] = field.op(updatedState)
        }
      })
      return updatedState
    });
  }

  handleSubmit(event) {
    alert(`You are able to deduct $${this.state['11'].toFixed(2)} of your self employment taxes this year`);
    event.preventDefault();
  }

  componentDidMount(){
    this.initialFocusField.focus();
  }

  displayValue(field) {
    if (field.computed) {
      return this.state[field.name].toFixed(2)
    } else {
      if (this.state[field.name] == 0) {
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
          <label key={i}>
            <div><span>{field.name}. </span>{field.instruction}</div>
            <input
              name={field.name}
              ref={(input) => { if (field.firstField) { this.initialFocusField = input } }}
              disabled={field.computed}
              value={this.displayValue(field)}
              type="number"
              onChange={this.handleChange}
              className='App-field' />
          </label>
        )}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>      
    );
  }
}

export default SelfEmploymentForm;
