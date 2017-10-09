import React from 'react';
import PropTypes from 'prop-types';

import styles from './DownloadButton.scss';

const DownloadButton = ({ image, url }) => (
  <a
    title={url}
    className={styles.wrapper}
    href={url}
    style={{ backgroundImage: `url('${image}')` }}
  >
    <span className="invisible">{url}</span>
  </a>
);

DownloadButton.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DownloadButton;
