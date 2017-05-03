import { expect } from 'chai'
import arraySum from './array-sum'

it('arraySum should be a function', () => {
  expect(arraySum).to.be.a('function')
})

it('arraySum([1, 2, 3, 5, 9]), should return 20', () => {
  expect(arraySum([1, 2, 3, 5, 9])).to.be.equal(20)
})

it('arraySum([1, 2]), should return 3', () => {
  expect(arraySum([1, 2])).to.be.equal(3)
})
