import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import image1 from 'assets/images/mobile2.png';
import image2 from 'assets/images/mobile1.png';

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
              <PreloadImage image={image1} alt="mobile" className={styles.image1} />
              <PreloadImage image={image2} alt="mobile" className={styles.image2} />
            </div>
          </div>

          <div className={`col-lg-6 col-md-12 ${styles.minHeight}`}>
            <FormattedMessage id={'Info.what'} defaultMessage={'WHY EQUILAB?'}>
              {txt => <h2>{txt}</h2>}
            </FormattedMessage>
            <p className={styles.subtitle}>
              <FormattedMessage id={'Info.what_sub'} defaultMessage={'TOTAL CONTROL'} />
            </p>
            <p className={styles.description}>
              <FormattedMessage
                id={'Info.what_info'}
                defaultMessage={
                  'Automatically collect information about your training by turning on Equilab and keeping the phone in your pocket while riding. Afterwards you can analyze your training by looking at your performance, energy consumption, gait distrubution, intensity jumps, intensity,stride, beat, pace, distance, speed,surface hardness, nr of jumps, etc....'
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
