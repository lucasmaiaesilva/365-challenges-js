import { expect } from 'chai'
import factorial from './fatorial'

it('Factorial should be a function', () => {
  expect(factorial).to.be.a('function')
})

it('Factorial(4), should return 24', () => {
  expect(factorial(4)).to.be.equal(24)
})

it('Factorial(8), should return 40320', () => {
  expect(factorial(8)).to.be.equal(40320)
})
