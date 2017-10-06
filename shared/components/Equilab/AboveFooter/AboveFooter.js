import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// import BackgroundImage from 'react-background-image-loader';

// import bgImage from 'assets/images/horse.png?size=1600';

import DownloadBar from 'Equilab/DownloadBar';

import styles from './AboveFooter.scss';

class AboveFooter extends Component {
  render() {
    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={styles.maxWidth}>
          <FormattedMessage id={'AboveFooter.title'} defaultMessage={'Häst App'}>
            {txt => <h2 className={styles.title}>{txt}</h2>}
          </FormattedMessage>
          <p className={styles.description}>
            <FormattedMessage
              id={'AboveFooter.description'}
              defaultMessage={
                'Projektet med hästar är inte så jättekul att hålla på med när man är stressad och hellre gör annat'
              }
            />
          </p>
          <DownloadBar />
        </div>
      </div>
    );
  }
}

AboveFooter.propTypes = {};

export default AboveFooter;
