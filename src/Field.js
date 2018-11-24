import React, { Component } from 'react';

class Field extends Component {
  componentDidMount(){
    if (this.initialFocusField) { this.initialFocusField.focus() }
  }

  render() {
    return (
      <div>
        <div>
          <h5>{this.props.field.name}</h5>
          <p>{this.props.field.instruction}</p>
          { this.props.field.explanation &&
            <p>{this.props.field.explanation}</p>
          }
        </div>
        <label>
          <input
            name={this.props.field.name}
            ref={(input) => { if (this.props.field.firstField) { this.initialFocusField = input } }}
            disabled={this.props.field.computed || this.props.forceDisable}
            value={this.props.display}
            type="number"
            onChange={this.props.handleChange}
            className='EstimatedTaxForm-field' />
        </label>
      </div>
    );
  }
}

export default Field;
