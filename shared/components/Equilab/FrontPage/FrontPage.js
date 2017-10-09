import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';

import Info from 'Equilab/Info';
import Testimonials from 'Equilab/Testimonials';
import AboveFooter from 'Equilab/AboveFooter';
import Hero from 'Equilab/Hero';

class FrontPage extends Component {
  onClick = () => {
    scroller.scrollTo('info', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };

  render() {
    return (
      <div className="front-page">
        <span onClick={this.onClick}>Scroll Test</span>
        <Hero />
        <Info />
        <Testimonials />
        <AboveFooter />
      </div>
    );
  }
}

export default FrontPage;
