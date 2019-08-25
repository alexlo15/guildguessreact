import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className='nav-wrapper'>
          <span className="left">Guild Game </span>
          <span className="right">HIGH SCORE: {this.props.highscore} &nbsp; | &nbsp; SCORE: {this.props.score}</span>
        </div>
      </nav>
    )
  }
}

export default Nav;