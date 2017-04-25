import { expect } from 'chai'
import longestWord from './longest-word'

it('longestWord should be a function', () => {
  expect(longestWord).to.be.a('function')
})

it('longestWord("fun&!! time"), should return "time"', () => {
  expect(longestWord('fun&!! time')).to.be.equal('time')
})

it('longestWord("I love dogs"), should return "dogs"', () => {
  expect(longestWord('I love dogs')).to.be.equal('dogs')
})
