import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setHello } from './actions'

import style from './HelloWorld.scss'

export class HelloWorld extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = { hello: 'Hello' }
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(setHello('HELLO'))
  }

  render () {
    const { hello } = this.state
    const { helloMessage } = this.props
    return (
      <div className={style.container}>
        { helloMessage || hello } World
      </div>
    )
  }
}

HelloWorld.propTypes = {
  helloMessage: PropTypes.string
}

function mapStateToProps (state) {
  return {
    helloMessage: state.helloMessage
  }
}

export default connect(mapStateToProps)(HelloWorld)
