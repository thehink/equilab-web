import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

const Card = props => (
  <div className={styles.wrapper}>
    <section className={styles.description}>
    ”Superbra app!!! Jag kan äntligen tillfredställa min optinojja när jag tränar min 10 miljonerhäst”
    </section>
    <section className={styles.name}>
    Rutger Silverhjelm, Proffsryttare
    </section>
    <section className={styles.image}>
      <img />
    </section>
  </div>
);

Card.propTypes = {

};

export default Card;
