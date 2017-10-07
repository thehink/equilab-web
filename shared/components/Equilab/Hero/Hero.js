import React, { Component } from 'react';

import styles from './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <h2 className={`${styles.title}`}>HÄSTEN I FOKUS</h2>
          <p className={`${styles.content}`}>Massa saker här</p>
        </div>
      </div>
    );
  }
}
