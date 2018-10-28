import calculateTax from './calculateTax'
import taxTables from './data/taxTables'

describe('calculateTax', () => {
  describe('for married filing jointly', () => {
    const mfjBrackets = taxTables.marriedFilingJointly

    it('calculates the tax for income less than the lowest bracket', () => {
      expect(calculateTax(10000, mfjBrackets)).toEqual(1000)
    })

    it('calculates the tax for income exactly at the lowest bracket', () => {
      expect(calculateTax(19050, mfjBrackets)).toEqual(1905)
    })

    it('calculates the tax for income exactly between brackets', () => {
      expect(calculateTax(20000, mfjBrackets)).toEqual(2019)
    })

    it('calculates the tax for income exactly at a middle bracket', () => {
      expect(calculateTax(77400, mfjBrackets)).toEqual(8907)
    })

    it('calculates the tax for income in the highest bracket', () => {
      expect(calculateTax(800000, mfjBrackets)).toEqual(235379)
    })
  })
})
