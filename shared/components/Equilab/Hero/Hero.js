import React, { Component } from 'react';

import DownloadBar from 'Equilab/DownloadBar';
import styles from './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <h2 className={`${styles.title}`}>MORE RIDING LESS WORRY</h2>
          <p className={`${styles.content}`}>Equilab, used by more than 30 000 riders worldwide!</p>
          <DownloadBar />
        </div>
      </div>
    );
  }
}
