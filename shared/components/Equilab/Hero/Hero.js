import React, { Component } from 'react';

import DownloadBar from 'Equilab/DownloadBar';
import styles from './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <h2 className={`${styles.title}`}>HÄSTEN I FOKUS</h2>
          <p className={`${styles.content}`}>Här har vi en massa saker</p>
          <DownloadBar />
        </div>
      </div>
    );
  }
}
