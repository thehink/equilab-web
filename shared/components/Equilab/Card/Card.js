import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

const Card = ({ description, name, image }) => (
  <div className={styles.wrapper}>
    <section className={styles.description}>
      {description}
    </section>
    <section className={styles.name}>
      {name}
    </section>
    <section className={styles.image}>
      <img />
    </section>
  </div>
);

Card.defaultProps = {
  image: '',
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Card;
