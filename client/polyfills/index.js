/* eslint-disable no-console */

import Modernizr from 'modernizr';

export default async () => {
  const polyfills = [];

  if (!Modernizr.requestanimationframe) {
    console.log('polyfilling requestAnimationFrame...');
    polyfills.push(import(/* webpackChunkName: "raf-polyfill" */ 'raf/polyfill'));
  }

  if (!Modernizr.intl) {
    console.log('polyfilling intl...');
    polyfills.push(import(/* webpackChunkName: "intl-polyfill" */ './intl'));
  }

  return Promise.all(polyfills);
};
