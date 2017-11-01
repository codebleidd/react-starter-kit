import React from 'react'
import { HelloWorld } from '../app/components/HelloWorld/HelloWorld'

describe('Hello world test', () => {
  it('render HelloWorld component', () => {
    const wrapper = shallow(<HelloWorld helloMessage='Hello' dispatch={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should should be false', () => {
    expect(false).toBe(false)
  })
})
