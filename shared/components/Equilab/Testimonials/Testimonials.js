

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'Equilab/Card';

import styles from './Testimonials.scss';

const testimonials = [
  {
    description: '”Superbra app!!! Jag kan äntligen tillfredställa min optinojja när jag tränar min 10 miljonerhäst”',
    name: 'Rutger Silverhjelm, Proffsryttare',
  },
  {
    description: '”Superbra app!!! Jag kan äntligen tillfredställa min optinojja när jag tränar min 10 miljonerhäst”',
    name: 'Rutger Silverhjelm, Proffsryttare1',
  },
  {
    description: '”Superbra app!!! Jag kan äntligen tillfredställa min optinojja när jag tränar min 10 miljonerhäst”',
    name: 'Rutger Silverhjelm, Proffsryttare2',
  },
];

class Testimonials extends Component {
  renderTestimonial = ({ description, name, image }) => (
    <Card
      key={name}
      name={name}
      description={description}
      image={image}
    />)

  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          {testimonials.map(this.renderTestimonial)}
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {

};

export default Testimonials;
