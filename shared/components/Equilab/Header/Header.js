import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

class Header extends Component {
  renderLinks() {
    return [
      <li key="faq">
        <Link to="#">HOME</Link>
      </li>,
      <li key="hiring">
        <Link to="#">F.A.Q</Link>
      </li>,
      <li key="about">
        <Link to="#">HIRING</Link>
      </li>,
    ];
  }
  render() {
    return (
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.headerImg}`} />
        <div className={`${styles.headerText}`}>Equilab</div>
        <nav className="navbar">
          <ul className={`nav navbar-nav ml-auto ${styles.headerLinks}`}>{this.renderLinks()}</ul>
        </nav>
      </div>
    );
  }
}

export default Header;
