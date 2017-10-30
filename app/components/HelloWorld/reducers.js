import * as types from './actionTypes'

export default function helloMessage (state = '', action) {
  switch (action.type) {
    case types.LOAD_HELLO:
      return action.helloMessage
    default:
      return state
  }
}
