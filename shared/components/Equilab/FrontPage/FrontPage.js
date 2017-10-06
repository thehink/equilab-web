import React, { Component } from 'react';

import Info from 'Equilab/Info';
import Testimonials from 'Equilab/Testimonials';
import AboveFooter from 'Equilab/AboveFooter';

class FrontPage extends Component {
  render() {
    return (
      <div className="front-page">
        {/*  Hero */}
        <Info />
        <Testimonials />
        <AboveFooter />
        FrontPage
      </div>
    );
  }
}

export default FrontPage;
