import * as types from './actionTypes'

export function setHello (helloMessage) {
  return {
    type: types.LOAD_HELLO,
    helloMessage
  }
}
