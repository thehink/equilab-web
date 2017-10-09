import React, { Component } from 'react';
import PropTypes from 'prop-types';

import image1 from 'assets/images/c.png';
import image2 from 'assets/images/s.png';
import image3 from 'assets/images/m.png';

import Card from 'Equilab/Card';

import styles from './Testimonials.scss';

const testimonials = [
  {
    description:
      '”Amazing that you now can see pace distance and training statistics in then same place.”',
    name: 'Sivert "sibban" Jonsson',
    sub: 'Former World Cup rider and class B-coach',
    image: image2,
  },
  {
    description:
      '”This app shows black on white how mucj you have exercised, no excuses anymore among my students!”',
    name: 'Magnus Skulason',
    sub: 'Multiple world cup medalist',
    image: image3,
  },
  {
    description:
      '”Being able to see how my fellow riders exercise gives me not only safety, but it is also very fun to see the training without being there.”',
    name: 'Charlotte Tillman',
    sub: 'National team rider and winner of Swedish Cup',
    image: image1,
  },
];

class Testimonials extends Component {
  renderTestimonial = ({ description, name, sub, image }) => (
    <Card key={name} name={name} description={description} sub={sub} image={image} />
  );

  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={styles.h2Wrapper}>
          <h2>See what others think</h2>
        </div>
        <div className={`${styles.maxWidth}`}>{testimonials.map(this.renderTestimonial)}</div>
      </div>
    );
  }
}

Testimonials.propTypes = {};

export default Testimonials;
