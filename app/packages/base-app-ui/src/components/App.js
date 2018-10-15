import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import App1 from './app-1/App'
import App2 from './app-2/App'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Link to='/app-1'>App 1</Link>
        <Link to='/app-2'>App 2</Link>
        <div>
          <Route path='/app-1' component={App1} />
          <Route path='/app-2' component={App2} />
        </div>
      </div>
    )
  }
}

export default (process.env.NODE_ENV === 'production' ? App : hot(module)(App))
