

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'Equilab/Card';

import styles from './Testimonials.scss';

class Testimonials extends Component {
  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {

};

export default Testimonials;
