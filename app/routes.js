import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld/HelloWorld'

const AppRouter = () => (
  <Router>
    <Route path="/" component={HelloWorld} />
  </Router>
)

export default AppRouter
