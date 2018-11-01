import calculateTax from './calculateTax'
import taxTables from './data/taxTables'

describe('calculateTax', () => {
  const mjfTable = taxTables["marriedFilingJointly"]
  describe('for married filing jointly', () => {
    it('calculates the tax for income less than the lowest bracket', () => {
      expect(calculateTax(10000, mjfTable)).toEqual(1000)
    })

    it('calculates the tax for income exactly at the lowest bracket', () => {
      expect(calculateTax(19050, mjfTable)).toEqual(1905)
    })

    it('calculates the tax for income exactly between brackets', () => {
      expect(calculateTax(20000, mjfTable)).toEqual(2019)
    })

    it('calculates the tax for income exactly at a middle bracket', () => {
      expect(calculateTax(77400, mjfTable)).toEqual(8907)
    })

    it('calculates the tax for income in the highest bracket', () => {
      expect(calculateTax(800000, mjfTable)).toEqual(235379)
    })
  })
})
