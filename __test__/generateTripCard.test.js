import { getRandomInt } from '../src/client/js/generateTripCard'
describe('Testing getRandomInt function', () => {

 test('Check the getRandomInt', () => {
  expect(getRandomInt(10) < 10).toBe(true)
 })
})