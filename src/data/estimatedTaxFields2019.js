export default [
  {
    name: "Question-1",
    formName: "custom",
    firstField: true,
    instruction: "Are you single? (1 for yes, blank for married filing jointly)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Question-2",
    formName: "custom",
    instruction: "Are you a farmer or fisherman? (1 for yes, blank for no)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Question-3",
    formName: "custom",
    instruction: "What was your AGI in 2018? (Line of 7 your 2018 1040)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Question-4",
    formName: "custom",
    instruction: "How much total tax did you owe in 2018? (Line 15 of your 2018 1040)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Question-5",
    formName: "custom",
    instruction: "What is the sum of your 2018 1040: Schedule 4 lines 58, 59, 61, 62; refundable credits on Form 1040 lines 17a, b or c; and credit from Form 8885 on line 74? (These are usually blank.)",
    explanation: "",
    computed: false,
    op: values => {}
  },

  {
    name: "SE-1a",
    formName: "se-tax-worksheet",
    instruction: "Enter your expected income and profits subject to self-employment tax*",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SE-1b",
    formName: "se-tax-worksheet",
    instruction: "If you will have farm income and also receive social security retirement or disability benefits, enter your expected Conservation Reserve Program payments that will be included on Schedule F (Form 1040) or listed on Schedule K-1 (Form 1065)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "SE-2",
    formName: "se-tax-worksheet",
    instruction:  "Subtract line 1b from line 1a",
    explanation: "",
    computed: true,
    op: values => values["SE-1a"] - values["SE-1b"]
  },
  {
    name: "SE-3",
    formName: "se-tax-worksheet",
    instruction:  "Multiply line 2 by 92.35% (0.9235). If less than $400, don’t complete this worksheet; you won’t owe self-employment tax on your expected net earnings from self-employment.",
    explanation: "7.65% is the combined  tax rate for Social Security and Medicare. This field is your income less that tax.",
    computed: true,
    op: values => Math.max(0, values["SE-2"] * 0.9235)
  },
  {
    name: "SE-4",
    formName: "se-tax-worksheet",
    instruction:  "Multiply line 3 by 2.9% (0.029)",
    explanation: "2.9% is the Medicare tax rate for self employed individuals.",
    computed: true,
    op: values => values["SE-3"] * 0.029
  },
  {
    name: "SE-5",
    formName: "se-tax-worksheet",
    instruction:  "Social security tax maximum income",
    explanation: "You pay Social Security tax on your first $128,400 of earnings (per person if you're married)",
    computed: true,
    op: values => 132900
  },
  {
    name: "SE-6",
    formName: "se-tax-worksheet",
    instruction:  "Enter your expected wages (if subject to social security tax or the 6.2% portion of tier 1 railroad retirement tax)",
    explanation: "How much money did you earn on a W-2 this year (as an employee)?",
    computed: false,
    op: values => {}
  },
  {
    name: "SE-7",
    formName: "se-tax-worksheet",
    instruction:  "Subtract line 6 from line 5. Note. If line 7 is zero or less, enter -0- on line 9 and skip to line 10.",
    explanation: "",
    computed: true,
    op: values => Math.max(0, values["SE-5"] - values["SE-6"])
  },
  {
    name: "SE-8",
    formName: "se-tax-worksheet",
    instruction:  "Enter the smaller of line 3 or line 7",
    explanation: "",
    computed: true,
    op: values => Math.min(values["SE-3"], values["SE-7"])
  },
  {
    name: "SE-9",
    formName: "se-tax-worksheet",
    instruction:  "Multiply line 8 by 12.4% (0.124)",
    explanation: "",
    computed: true,
    op: values => values["SE-8"] * 0.124
  },
  {
    name: "SE-10",
    formName: "se-tax-worksheet",
    instruction: "Add lines 4 and 9. Enter the result here and on line 9 of your 2019 Estimated Tax Worksheet",
    explanation: "",
    computed: true,
    op: values => values["SE-4"] + values["SE-9"]
  },
  {
    name: "SE-11",
    formName: "se-tax-worksheet",
    instruction: "Multiply line 10 by 50% (0.50). This is your expected deduction for self-employment tax on Form 1040, line 27. Subtract this amount when figuring your expected AGI on line 1 of your 2019 Estimated Tax Worksheet",
    explanation: "",
    computed: true,
    op: values => values["SE-10"] * 0.5
  },
  {
    name: "Custom-1",
    formName: "custom",
    instruction: "Other income you expect in 2019 without adjustments (e.g. interest, dividends, your spouse's income if filing jointly)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Custom-2",
    formName: "custom",
    instruction: "Max Solo 401(k) contribution (assuming no other 401(k) or 403(b) contributions)",
    explanation: "",
    computed: true,
    op: values => (values["SE-1a"] - values["SE-11"]) * 0.2 + Math.min(values["SE-1a"],19000)
  },
  {
    name: "Custom-3",
    formName: "custom",
    instruction: "Solo 401(k) election",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "Custom-4",
    formName: "custom",
    instruction: "HSA contributions (max $3500 for single HDHP plan, $7000 for a family HDHP plan)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-1",
    formName: "estimated-tax-worksheet",
    instruction: "Adjusted gross income you expect in 2019 (see instructions)",
    explanation: "",
    computed: true,
    op: values => values["SE-1a"] + values["SE-6"] + values["Custom-1"] - values["SE-11"] - values["Custom-3"] - values["Custom-4"]
  },
  {
    name: "ET-2a",
    formName: "estimated-tax-worksheet",
    instruction: "Deductions • If you plan to itemize deductions, enter the estimated total of your itemized deductions. These include qualifying home mortgage interest, charitable contributions, state and local taxes (up to $10,000), and medical expenses in excess of 7.5% of your income.* • If you don’t plan to itemize deductions, enter your standard deduction.",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-2b",
    formName: "estimated-tax-worksheet",
    instruction: "If you qualify for the deduction under section 199A, enter the estimated amount of the deduction you are allowed on your qualified business income from a qualified trade or business",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-2c",
    formName: "estimated-tax-worksheet",
    instruction: "Add lines 2a and 2b",
    explanation: "",
    computed: true,
    op: values => values["ET-2a"] + values["ET-2b"]
  },
  {
    name: "ET-3",
    formName: "estimated-tax-worksheet",
    instruction: "Subtract line 2c from line 1",
    explanation: "",
    computed: true,
    op: values => values["ET-1"] - values["ET-2c"]
  },
  {
    name: "ET-4",
    formName: "estimated-tax-worksheet",
    instruction: "Tax. Figure your tax on the amount on line 3 by using the 2019 Tax Rate Schedules. Caution: If you will have qualified dividends or a net capital gain, or expect to exclude or deduct foreign earned income or housing, see Worksheets 2-5 and 2-6 in Pub. 505 to figure the tax",
    explanation: "",
    computed: true,
    op: (values, taxTables, calculateTax) => calculateTax(values["ET-3"], taxTables[(values["Question-1"] ? "single" : "marriedFilingJointly")])
  },
  {
    name: "ET-5",
    formName: "estimated-tax-worksheet",
    instruction: "Alternative minimum tax from Form 6251 or included on Form 1040A, line 28",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-6",
    formName: "estimated-tax-worksheet",
    instruction: "Add lines 4 and 5. Add to this amount any other taxes you expect to include in the total on Form 1040, line 44.",
    explanation: "",
    computed: true,
    op: values => values["ET-4"] + values["ET-5"]
  },
  {
    name: "ET-7",
    formName: "estimated-tax-worksheet",
    instruction: "Credits (see instructions). Do not include any income tax withholding on this line.",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-8",
    formName: "estimated-tax-worksheet",
    instruction: "Subtract line 7 from line 6. If zero or less, enter -0-",
    explanation: "",
    computed: true,
    op: values => values["ET-6"] - values["ET-7"]
  },
  {
    name: "ET-9",
    formName: "estimated-tax-worksheet",
    instruction: "Self-employment tax (see instructions)",
    explanation: "",
    computed: true,
    op: values => values["SE-10"]
  },
  {
    name: "ET-10",
    formName: "estimated-tax-worksheet",
    instruction: "Other taxes (see instructions)",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-11a",
    formName: "estimated-tax-worksheet",
    instruction: "Add lines 8 through 10",
    explanation: "",
    computed: true,
    op: values => values["ET-8"] + values["ET-9"] + values["ET-10"]
  },
  {
    name: "ET-11b",
    formName: "estimated-tax-worksheet",
    instruction: "Earned income credit, additional child tax credit, fuel tax credit, net premium tax credit, refundable American opportunity credit, and refundable credit from Form 8885",
    explanation: "",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-11c",
    formName: "estimated-tax-worksheet",
    instruction: "Total 2019 estimated tax. Subtract line 11b from line 11a. If zero or less, enter -0-",
    explanation: "",
    computed: true,
    op: values => Math.max(0, values["ET-11a"] - values["ET-11b"])
  },
  {
    name: "ET-12a",
    formName: "estimated-tax-worksheet",
    instruction: "Multiply line 11c by 90% (66 2/3% for farmers and fishermen)",
    explanation: "",
    computed: true,
    op: values => values["ET-11c"] * (values["Question-2" ] ? 0.6666 : 0.9)
  },
  {
    name: "ET-12b",
    formName: "estimated-tax-worksheet",
    instruction: "Required annual payment based on prior year's tax (see instructions)",
    explanation: "Almost always is line 15 of your 2018 1040. Somtimes includes reductions from that number.",
    computed: true,
    op: values => {
      const adj_tax = values["Question-4"] - values["Question-5"]
      return values["Question-3"] > 150000 ? adj_tax * 1.1 : adj_tax
    }
  },
  {
    name: "ET-12c",
    formName: "estimated-tax-worksheet",
    instruction: "Required annual payment to avoid a penalty. Enter the smaller of line 12a or 12b. Caution: Generally, if you do not prepay (through income tax withholding and estimated tax payments) at least the amount on line 12c, you may owe a penalty for not paying enough estimated tax. To avoid a penalty, make sure your estimate on line 11c is as accurate as possible. Even if you pay the required annual payment, you may still owe tax when you file your return. If you prefer, you can pay the amount shown on line 11c. For details, see chapter 2 of Pub. 505.",
    explanation: "",
    computed: true,
    op: values => Math.min(values["ET-12a"], values["ET-12b"])
  },
  {
    name: "ET-13",
    formName: "estimated-tax-worksheet",
    instruction: "Income tax withheld and estimated to be withheld during 2019 (including income tax withholding on pensions, annuities, certain deferred income, etc.)",
    explanation: "Look at your latest paycheck(s) (incl spouse if married filing jointly) to see how much federal income tax is withheld per pay period and how much has been withheld year to date, then project the approximate year end total withholdings.",
    computed: false,
    op: values => {}
  },
  {
    name: "ET-14a",
    formName: "estimated-tax-worksheet",
    instruction: "Subtract line 13 from line 12c. Is the result zero or less? Yes. Stop here. You are not required to make estimated tax payments. No. Go to line 14b.",
    explanation: "",
    computed: true,
    op: values => values["ET-12c"] - values["ET-13"]
  },
  {
    name: "ET-14b",
    formName: "estimated-tax-worksheet",
    instruction: "Subtract line 13 from line 11c. Is the result less than $1,000? Yes. Stop here. You are not required to make estimated tax payments. No. Go to line 15 to figure your required payment.",
    explanation: "",
    computed: true,
    op: values => values["ET-11c"] - values["ET-13"]
  },
  {
    name: "ET-15",
    formName: "estimated-tax-worksheet",
    instruction: "If the first payment you are required to make is due April 15, 2019, enter 1⁄4 of line 14a (minus any 2018 overpayment that you are applying to this installment) here, and on your estimated tax payment voucher(s) if you are paying by check or money order.",
    explanation: "",
    computed: true,
    op: values => values["ET-14a"] < 0 || values["ET-14b"] < 1000 ? 0 : values["ET-14a"] * 0.25
  }
]
