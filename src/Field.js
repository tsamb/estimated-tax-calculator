import React, { Component } from 'react';

class Field extends Component {
  componentDidMount(){
    if (this.initialFocusField) { this.initialFocusField.focus() }
  }

  render() {
    return (
      <label>
        <div><span>{this.props.field.name}. </span>{this.props.field.instruction}</div>
        <input
          name={this.props.field.name}
          ref={(input) => { if (this.props.field.firstField) { this.initialFocusField = input } }}
          disabled={this.props.field.computed}
          value={this.props.display}
          type="number"
          onChange={this.props.handleChange}
          className='App-field' />
      </label>
    );
  }
}

export default Field;
