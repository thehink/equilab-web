

import React from 'react';
import PropTypes from 'prop-types';

import styles from './DownloadButton.scss';

const DownloadButton = ({ image, url }) => (
  <a
    className={styles.wrapper}
    href={url}
    style={{ backgroundImage: `url('${image}')` }}
  >
    <span className="invisible">Download on appstore</span>
  </a>
);

DownloadButton.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DownloadButton;
