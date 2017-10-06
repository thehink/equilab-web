import React, { Component } from 'react';

import Info from 'Equilab/Info';
import AboveFooter from 'Equilab/AboveFooter';

class FrontPage extends Component {
  render() {
    return (
      <div className="front-page">
        {/*  Hero */}
        <Info />
        {/*  Reviews */}
        <AboveFooter />
        FrontPage
      </div>
    );
  }
}

export default FrontPage;
