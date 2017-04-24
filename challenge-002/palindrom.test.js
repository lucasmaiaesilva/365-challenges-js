import { expect } from 'chai'
import palindrom from './palindrom'

it('palindrom should be a function', () => {
  expect(palindrom).to.be.a('function')
})

it('palindrom("coderbyte"), should return "etybredoc"', () => {
  expect(palindrom('coderbyte')).to.be.equal('etybredoc')
})

it('palindrom("I Love Code"), should return "edoC evoL I"', () => {
  expect(palindrom('I Love Code')).to.be.equal('edoC evoL I')
})
