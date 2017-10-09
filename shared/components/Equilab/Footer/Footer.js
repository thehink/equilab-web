import React, { Component } from 'react';

import ImageLink from 'Equilab/ImageLink';

import equilabIcon from 'assets/images/logo.png';
import facebookIcon from 'assets/images/facebook.png';
import instagramIcon from 'assets/images/instagram.png';

import styles from './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.wrapper}>
        <div className={styles.contact}>
          <h3>Contact Equilab</h3>
          <span className={styles.email}>team@equilab.com</span>
        </div>
        <div className={styles.bottomBar}>
          <ImageLink
            className={`${styles.facebook}`}
            link="https://google.se"
            image={facebookIcon}
            title="Equilab on facebook"
          />
          <ImageLink
            className={`${styles.instagram}`}
            link="https://google.se"
            image={instagramIcon}
            title="Equilab on instagram"
          />
          <ImageLink
            className={`${styles.logo}`}
            link="/"
            image={equilabIcon}
            title="Equilab home"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
