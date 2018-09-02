import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
            <img src={this.props.logo} width="70px" height="45px"/>
        </a>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="#">My Shopping Cart</a>
          </li>
        </ul>
      </nav>
    )
  }
}
