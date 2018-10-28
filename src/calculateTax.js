function calculateTax(income, table) {
  let remainingIncome = income;
  return table.reduce((tax, bracket) => {
    const {lowerBracket, upperBracket, percentage} = bracket
    const currentBracketSpread = upperBracket - lowerBracket
    if (remainingIncome - currentBracketSpread <= 0) {
      tax += remainingIncome * percentage
      remainingIncome = 0
      return tax
    } else {
      tax += currentBracketSpread * percentage
      remainingIncome -= currentBracketSpread
      return tax
    }
  }, 0)
}

export default calculateTax
