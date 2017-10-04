import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    return (
      <div>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            Hiring
          </Link>
        </li>
      </div>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav ml-auto">{this.renderLinks()}</ul>
      </nav>
    );
  }
}

export default Header;
