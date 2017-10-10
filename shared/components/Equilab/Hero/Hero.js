import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';

import DownloadBar from 'Equilab/DownloadBar';
import styles from './Hero.scss';

export default class Hero extends Component {
  onClick = () => {
    scroller.scrollTo('info', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };

  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <h2 className={`${styles.title}`}>MORE RIDING LESS WORRY</h2>
          <p className={`${styles.content}`}>Equilab, used by more than 30 000 riders worldwide!</p>
          <DownloadBar />
          <div className={`${styles.arrow}`}>
            <p>NOT CONVINCED YET?</p>
            <span onClick={this.onClick}>
              <div className={`${styles.arrowImg}`} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
