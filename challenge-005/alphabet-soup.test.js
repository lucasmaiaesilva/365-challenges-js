import {expect} from 'chai'
import alphabetSoup from './alphabet-soup'

it('should alphabetSoup be a function', () => {
  expect(alphabetSoup).to.be.a('function')
})

it('should alphabetSoup("hooplah") to return "ahhloop"', () => {
  expect(alphabetSoup('hooplah')).to.be.equal('ahhloop')
})
