import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.se_tax_fields = [
      {
        name: "1a",
        instruction: "Enter your expected income and profits subject to self-employment tax*",
        explanation: "",
        computed: false,
        op: values => {}
      },
      {
        name: "1b",
        instruction: "If you will have farm income and also receive social security retirement or disability benefits, enter your expected Conservation Reserve Program payments that will be included on Schedule F (Form 1040) or listed on Schedule K-1 (Form 1065)",
        explanation: "",
        computed: false,
        op: values => {}
      },
      {
        name: "2",
        instruction:  "Subtract line 1b from line 1a",
        explanation: "",
        computed: true,
        op: values => values["1a"] - values["1b"]
      },
      {
        name: "3",
        instruction:  "Multiply line 2 by 92.35% (0.9235)",
        explanation: "7.65% is the combined  tax rate for Social Security and Medicare. This field is your income less that tax.",
        computed: true,
        op: values => values["2"] * 0.9235
      },
      {
        name: "4",
        instruction:  "Multiply line 3 by 2.9% (0.029)",
        explanation: "2.9% is the Medicare tax rate for self employed individuals.",
        computed: true,
        op: values => values["3"] * 0.029
      },
      {
        name: "5",
        instruction:  "Social security tax maximum income",
        explanation: "You pay Social Security tax on your first $128,400 of earnings (per person if you're married)",
        computed: true,
        op: values => 128400
      },
      {
        name: "6",
        instruction:  "Enter your expected wages (if subject to social security tax or the 6.2% portion of tier 1 railroad retirement tax)",
        explanation: "How much money did you earn on a W-2 this year (as an employee)?",
        computed: false,
        op: values => {}
      },
      {
        name: "7",
        instruction:  "Subtract line 6 from line 5. Note. If line 7 is zero or less, enter -0- on line 9 and skip to line 10.",
        explanation: "",
        computed: true,
        op: values => values["5"] - values["6"]
      },
      {
        name: "8",
        instruction:  "Enter the smaller of line 3 or line 7",
        explanation: "",
        computed: true,
        op: values => Math.min(values["3"], values["7"])
      },
      {
        name: "9",
        instruction:  "Multiply line 8 by 12.4% (0.124)",
        explanation: "",
        computed: true,
        op: values => values["8"] * 0.124
      },
      {
        name: "10",
        instruction: "Add lines 4 and 9. Enter the result here and on line 9 of your 2018 Estimated Tax Worksheet",
        explanation: "",
        computed: true,
        op: values => values["4"] + values["9"]
      },
      {
        name: "11",
        instruction: "Multiply line 10 by 50% (0.50). This is your expected deduction for self-employment tax on Form 1040, line 27. Subtract this amount when figuring your expected AGI on line 1 of your 2018 Estimated Tax Worksheet",
        explanation: "",
        computed: true,
        op: values => values["10"] * 0.5
      }
    ]

    this.state = {}
    this.se_tax_fields.forEach(field => this.state[field.name] = 0)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const changedFieldName = event.target.name
    const changedFieldValue = parseInt(event.target.value)
    this.setState((state, props) => {
      const updatedState = state
      updatedState[changedFieldName] = changedFieldValue
      this.se_tax_fields.forEach((field) => {
        if (field.computed) {
          updatedState[field.name] = field.op(updatedState)
        }
      })
      return updatedState
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          {this.se_tax_fields.map((field, i) =>
            <label key={i}>
              <div><span>{field.name}. </span>{field.instruction}</div>
              <input name={field.name} disabled={field.computed} type="text" onChange={this.handleChange} type='number'/>
            </label>
          )}
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
