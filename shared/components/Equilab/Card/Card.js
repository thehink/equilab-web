import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

const Card = ({ description, name, sub, image }) => (
  <div className={styles.wrapper}>
    <section className={styles.description}>{description}</section>
    <section className={styles.info}>
      <span className={styles.name}>{name}</span>
      <span className={styles.sub}>{sub}</span>
    </section>
    <section className={styles.image}>
      <img srcSet={image.srcSet} src={image.src} />
    </section>
  </div>
);

Card.defaultProps = {
  image: '',
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
};

export default Card;
