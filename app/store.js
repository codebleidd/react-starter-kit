import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const logger = createLogger({ collapsed: true })

export default function (initialState) {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(logger)
  )
}
