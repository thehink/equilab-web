import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PreloadImage extends PureComponent {
  render() {
    const { image, alt } = this.props;

    return <img {...this.props} alt={alt} srcSet={image.srcSet} src={image.src} />;
  }
}

PreloadImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
};

export default PreloadImage;
