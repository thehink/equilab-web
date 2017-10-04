/* eslint-disable global-require */

import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import asyncBootstrapper from 'react-async-bootstrapper';
import { AsyncComponentProvider } from 'react-async-component';
import { Provider } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';

import createStore from 'store';

import './polyfills';

import ReactHotLoader from './components/ReactHotLoader';
import App from '../shared/components/Equilab';

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

const history = {};

const store = createStore(window.__data, history);

// LOCALE

const langContext = require.context('locales', false, /.json$/);
const langs = {};

langContext.keys().forEach((module) => {
  const lang = module.replace(/^.*[\\\/]/, '').split('.')[0];

  langs[lang] = langContext(module);
});

addLocaleData([...en, ...sv]);

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const messages = langs[languageWithoutRegionCode] || langs[language] || langs.en;

// Get any rehydrateState for the async components.
// eslint-disable-next-line no-underscore-dangle
const asyncComponentsRehydrateState = window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

/**
 * Renders the given React Application component.
 */
function renderApp(TheApp) {
  // Firstly, define our full application component, wrapping the given
  // component app with a browser based version of react router.
  const app = (
    <ReactHotLoader>
      <AsyncComponentProvider rehydrateState={asyncComponentsRehydrateState}>
        <Provider store={store}>
          <IntlProvider locale={language} messages={messages}>
            <BrowserRouter forceRefresh={!supportsHistory}>
              <TheApp />
            </BrowserRouter>
          </IntlProvider>
        </Provider>
      </AsyncComponentProvider>
    </ReactHotLoader>
  );

  // We use the react-async-component in order to support code splitting of
  // our bundle output. It's important to use this helper.
  // @see https://github.com/ctrlplusb/react-async-component
  asyncBootstrapper(app).then(() => hydrate(app, container));
}

// Execute the first render of our app.
renderApp(App);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');

// The following is needed so that we can support hot reloading our application.
if (process.env.BUILD_FLAG_IS_DEV === 'true' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('../shared/components/Equilab', () => {
    renderApp(require('../shared/components/Equilab').default);
  });
}
