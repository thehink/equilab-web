import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

class Header extends Component {
  renderLinks() {
    return [
      <li>
        <Link to="#">FAQ</Link>
      </li>,
      <li>
        <Link to="#">Hiring</Link>
      </li>,
      <li>
        <Link to="#">About</Link>
      </li>,
    ];
  }
  render() {
    return (
      <div className={`${styles.wrapper}`}>
        <nav className="navbar">
          <ul className={`nav navbar-nav ml-auto ${styles.headerLinks}`}>{this.renderLinks()}</ul>
        </nav>
      </div>
    );
  }
}

export default Header;
