export default [
  {
    name: "UET-1",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Enter your 2018 tax after credits from Form 1040, line 56 (see instructions if not filing Form 1040)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "UET-2",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Other taxes, including self-employment tax and, if applicable, Additional Medicare Tax and/or Net Investment Income Tax (see instructions)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "UET-3",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Refundable credits, including the premium tax credit (see instructions)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "UET-4",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Current year tax. Combine lines 1, 2, and 3. If less than $1,000, stop; you don’t owe a penalty. Don’t file Form 2210",
    explanation: "",
    computed: true,
    op: values => values["UET-1"] + values["UET-2"] - values["UET-3"]
  },
  {
    name: "UET-5",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Multiply line 4 by 90% (0.90)",
    explanation: "",
    computed: true,
    op: values => values["UET-4"] * 0.9
  },
  {
    name: "UET-6",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Withholding taxes. Don’t include estimated tax payments (see instructions)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "UET-7",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Subtract line 6 from line 4. If less than $1,000, stop; you don’t owe a penalty. Don’t file Form 2210",
    explanation: "",
    computed: true,
    op: values => values["UET-4"] - values["UET-6"]
  },
  {
    name: "UET-8",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Maximum required annual payment based on prior year’s tax (see instructions)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "UET-9",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "Required annual payment. Enter the smaller of line 5 or line 8",
    explanation: "",
    computed: false,
    op: values => Math.min(values["UET-5"], values["UET-8"])
  },
  {
    name: "SAI-1a",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-1",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SAI-",
    formName: "underpayment-estimated-tax-worksheet",
    instruction: "",
    explanation: "",
    computed: false,
    op: values => {}
  },
]