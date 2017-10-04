import path from 'path';

import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { Provider } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';

import createStore from 'store';

import config from '../../../config';

import ServerHTML from './ServerHTML';
import App from '../../../shared/components/Equilab';

const langContext = require.context('locales', false, /.json$/);
const langs = {};

langContext.keys().forEach((module) => {
  const lang = path.basename(module, path.extname(module));

  langs[lang] = langContext(module);
});

/**
 * React application middleware, supports server side rendering.
 */
export default function reactApplicationMiddleware(request, response) {
  // Ensure a nonce has been provided to us.
  // See the server/middleware/security.js for more info.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const nonce = response.locals.nonce;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (config('disableSSR')) {
    if (process.env.BUILD_FLAG_IS_DEV === 'true') {
      // eslint-disable-next-line no-console
      console.log('==> Handling react route without SSR');
    }
    // SSR is disabled so we will return an "empty" html page and
    // rely on the client to initialize and render the react application.
    const html = renderToStaticMarkup(<ServerHTML nonce={nonce} />);
    response.status(200).send(`<!DOCTYPE html>${html}`);
    return;
  }

  // Create a context for our AsyncComponentProvider.
  const asyncComponentsContext = createAsyncContext();

  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = {};

  const history = {};

  const initialState = {};

  const store = createStore(initialState, history);

  addLocaleData([...en, ...sv]);

  const language = request.acceptsLanguages()[0];

  // Split locales with a region code
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

  const messages = langs[languageWithoutRegionCode] || langs[language] || langs.en;

  // Declare our React application.
  const app = (
    <AsyncComponentProvider asyncContext={asyncComponentsContext}>
      <Provider store={store}>
        <IntlProvider locale={language} messages={messages}>
          <StaticRouter location={request.url} context={reactRouterContext}>
            <App />
          </StaticRouter>
        </IntlProvider>
      </Provider>
    </AsyncComponentProvider>
  );

  // Pass our app into the react-async-component helper so that any async
  // components are resolved for the render.
  asyncBootstrapper(app).then(() => {
    const appString = renderToString(app);

    // Generate the html response.
    const html = renderToStaticMarkup(
      <ServerHTML
        reactAppString={appString}
        nonce={nonce}
        helmet={Helmet.rewind()}
        asyncComponentsState={asyncComponentsContext.getState()}
        initialState={store.getState()}
      />
    );

    // Check if the router context contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (reactRouterContext.url) {
      response.status(302).setHeader('Location', reactRouterContext.url);
      response.end();
      return;
    }

    response
      .status(
        reactRouterContext.missed
          ? // If the renderResult contains a "missed" match then we set a 404 code.
          // Our App component will handle the rendering of an Error404 view.
          404
          : // Otherwise everything is all good and we send a 200 OK status.
          200
      )
      .send(`<!DOCTYPE html>${html}`);
  });
}
