import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import image from 'assets/images/mobile.png';

import PreloadImage from 'Equilab/PreloadImage';

import styles from './Info.scss';

class Info extends Component {
  render() {
    const { state } = this;

    return (
      <div className={`row ${styles.wrapper}`}>
        <div className={`${styles.maxWidth}`}>
          <div className={`hidden-xs-up col-lg-6 col-md-12 ${styles.imageCol}`}>
            <div className={styles.imageWrapper}>
              <PreloadImage image={image} alt="mobile" className={styles.image1} />
              <PreloadImage image={image} alt="mobile" className={styles.image2} />
            </div>
          </div>

          <div className={`col-lg-6 col-md-12 ${styles.minHeight}`}>
            <FormattedMessage id={'Info.what'} defaultMessage={'Vad är Equilab?'}>
              {txt => <h2>{txt}</h2>}
            </FormattedMessage>
            <p className={styles.subtitle}>
              <FormattedMessage id={'Info.what_sub'} defaultMessage={'En bra App!'} />
            </p>
            <p className={styles.description}>
              <FormattedMessage
                id={'Info.what_info'}
                defaultMessage={
                  'Projektet med hästar är inte så jättekul att hålla på med när man är stressad och hellre gör annat. Men det visade sig fungera hyffsat bra och blev nästan lite kul när jag väl satte igång med det. Tänka sig hur det kan bli när man är röksugen och frustrerad.'
                }
              />
            </p>

            <button type="button" className={`btn ${styles.signUpButton}`}>
              <FormattedMessage id={'Info.sign_up'} defaultMessage={'Sign up!'} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
