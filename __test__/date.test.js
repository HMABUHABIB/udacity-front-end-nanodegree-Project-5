
import { numberOfDays } from '../src/client/js/date'
describe('Testing date function', () => {

 test('Check the number of Days between two date', () => {
  expect(numberOfDays('2020-01-15', '2020-01-20')).toBe(5)
 })

 let today = '2020-02-15'
 test('Check numberOfDays from today to next date', () => {
  expect(numberOfDays(today, '2020-03-20')).toBe(34)
 })

})