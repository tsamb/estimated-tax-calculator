export default [
    {
      name: "1",
      instruction: "Adjusted gross income you expect in 2018 (see instructions)",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "2a",
      instruction: "Deductions • If you plan to itemize deductions, enter the estimated total of your itemized deductions. These include qualifying home mortgage interest, charitable contributions, state and local taxes (up to $10,000), and medical expenses in excess of 7.5% of your income.* • If you don’t plan to itemize deductions, enter your standard deduction.",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "2b",
      instruction: "If you qualify for the deduction under section 199A, enter the estimated amount of the deduction you are allowed on your qualified business income from a qualified trade or business",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "2c",
      instruction: "Add lines 2a and 2b",
      explanation: "",
      computed: true,
      op: values => values["2a"] + values["2b"]
    },
    {
      name: "3",
      instruction: "Subtract line 2c from line 1",
      explanation: "",
      computed: true,
      op: values => values["1"] - values["2c"]
    },
    {
      name: "4",
      instruction: "Tax. Figure your tax on the amount on line 3 by using the 2018 Tax Rate Schedules. Caution: If you will have qualified dividends or a net capital gain, or expect to exclude or deduct foreign earned income or housing, see Worksheets 2-5 and 2-6 in Pub. 505 to figure the tax",
      explanation: "",
      computed: false,
      op: values => {}
      // eventually calculate based on Q&A + static data
    },
    {
      name: "5",
      instruction: "Alternative minimum tax from Form 6251 or included on Form 1040A, line 28",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "6",
      instruction: "Add lines 4 and 5. Add to this amount any other taxes you expect to include in the total on Form 1040, line 44 7 Credits (see instructions). Do not include any income tax withholding on this line",
      explanation: "",
      computed: true,
      op: values => values["4"] + values["5"]
    },
    {
      name: "8",
      instruction: "Subtract line 7 from line 6. If zero or less, enter -0-",
      explanation: "",
      computed: true,
      op: values => values["6"] - values["7"]
    },
    {
      name: "9",
      instruction: "Self-employment tax (see instructions)",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "10",
      instruction: "Other taxes (see instructions)",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "11a",
      instruction: "Add lines 8 through 10",
      explanation: "",
      computed: true,
      op: values => values["8"] + values["9"] + values["10"]
    },
    {
      name: "11b",
      instruction: "Earned income credit, additional child tax credit, fuel tax credit, net premium tax credit, refundable American opportunity credit, and refundable credit from Form 8885",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "11c",
      instruction: "Total 2018 estimated tax. Subtract line 11b from line 11a. If zero or less, enter -0-",
      explanation: "",
      computed: true,
      op: values => Math.max(0, values["11a"] - values["11b"])
    },
    {
      name: "12a",
      instruction: "Multiply line 11c by 90% (66 2/3% for farmers and fishermen)",
      explanation: "",
      computed: true,
      op: values => values["11c"] * 0.9
      // eventually calculate based on Q&A + static data
    },
    {
      name: "12b",
      instruction: "Required annual payment based on prior year's tax (see instructions)",
      explanation: "",
      computed: false,
      op: values => {}
      // eventually calculate based on Q&A + static data
    },
    {
      name: "12c",
      instruction: "Required annual payment to avoid a penalty. Enter the smaller of line 12a or 12b. Caution: Generally, if you do not prepay (through income tax withholding and estimated tax payments) at least the amount on line 12c, you may owe a penalty for not paying enough estimated tax. To avoid a penalty, make sure your estimate on line 11c is as accurate as possible. Even if you pay the required annual payment, you may still owe tax when you file your return. If you prefer, you can pay the amount shown on line 11c. For details, see chapter 2 of Pub. 505.",
      explanation: "",
      computed: false,
      op: values => Math.min(values["12a"], values["12b"])
    },
    {
      name: "13",
      instruction: "Income tax withheld and estimated to be withheld during 2018 (including income tax withholding on pensions, annuities, certain deferred income, etc.)",
      explanation: "",
      computed: false,
      op: values => {}
    },
    {
      name: "14a",
      instruction: "Subtract line 13 from line 12c. Is the result zero or less? Yes. Stop here. You are not required to make estimated tax payments. No. Go to line 14b.",
      explanation: "",
      computed: true,
      op: values => values["12c"] - values["13"]
    },
    {
      name: "14b",
      instruction: "Subtract line 13 from line 11c. Is the result less than $1,000? Yes. Stop here. You are not required to make estimated tax payments. No. Go to line 15 to figure your required payment.",
      explanation: "",
      computed: true,
      op: values => values["11c"] - values["13"]
    },
    {
      name: "15",
      instruction: "If the first payment you are required to make is due April 17, 2018, enter 1⁄4 of line 14a (minus any 2017 overpayment that you are applying to this installment) here, and on your estimated tax payment voucher(s) if you are paying by check or money order.",
      explanation: "",
      computed: true,
      op: values => values["14a"] < 0 || values["14b"] < 1000 ? 0 : values["14a"] * 0.25
    }
  ]
  