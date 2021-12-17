import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Home from './views/home'
import Category from './views/category'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Category} path="/category" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
