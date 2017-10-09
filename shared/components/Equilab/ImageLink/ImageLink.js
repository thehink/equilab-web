import React from 'react';
import PropTypes from 'prop-types';

import AutoLink from 'Equilab/utils/AutoLink';

import styles from './ImageLink.scss';

const ImageLink = ({ link, image, title, className }) => (
  <AutoLink to={link} className={`${styles.wrapper} ${className}`}>
    <img src={image.src} alt={title} srcSet={image.srcSet} />
  </AutoLink>
);

ImageLink.defaultProps = {
  className: '',
};

ImageLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageLink;
