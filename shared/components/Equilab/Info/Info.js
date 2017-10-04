import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import style from './Info.scss';

class Info extends Component {
  render() {
    const { state } = this;

    return (
      <div className={`row ${style.wrapper}`}>
        <div className="col">
          <div className="alert alert-primary" role="alert">
            <FormattedMessage id={'Info.bootstrao'} defaultMessage={'Bootstrap works!'} />
          </div>
        </div>
        <div className="col">
          <h2>
            <FormattedMessage id={'Info.what'} defaultMessage={'What is equilab?'} />
          </h2>
          <p>
            <FormattedMessage id={'Info.what_sub'} defaultMessage={'A good APP!'} />
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
