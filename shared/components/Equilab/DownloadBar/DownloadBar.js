import React, { Component } from 'react';
import PropTypes from 'prop-types';

import appleImage from 'assets/images/Download_on_the_App_Store_Badge.svg';
import androidImage from 'assets/images/Get_it_on_Google_play.svg';

import DownloadButton from './DownloadButton';

import styles from './DownloadBar.scss';

const DownloadBar = () => (
  <div className={styles.wrapper}>
    <DownloadButton image={appleImage} url="https://google.se" />
    <DownloadButton image={androidImage} url="https://google.se" />
  </div>
);

DownloadBar.propTypes = {

};

export default DownloadBar;
