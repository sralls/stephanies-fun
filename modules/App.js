import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>Stephanie's React Router (App.js)</h3>
        <ul role="nav">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/pictures" activeClassName="active">Pictures</NavLink></li>
          <li><NavLink to="/runs" activeClassName="active">Runs</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


