import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from '../modules/App'
import About from '../modules/About'
import Pictures from '../modules/Pictures'
import Runs from '../modules/Runs'
import Home from '../module/Home'

// Instead of rendering the App component here (like classic react) we will render the router
// ... which will detail the different route paths
// render(<App/>, document.getElementById('app'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
    	<Route path="/pictures" component={Pictures}/>
    	<Route path="/about" component={About}/>
    	<Route path="/runs" component={Runs}/>
  	</Route>
  </Router>
), document.getElementById('app'))