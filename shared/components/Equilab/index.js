import React from 'react';
import Helmet from 'react-helmet';

import 'styles/bootstrap.global.scss';
import 'styles/common.global.scss';

import config from '../../../config';

import Header from './Header';
import Footer from './Footer';
import Router from './routes';

function App() {
  return (
    <app>
      <Helmet>
        <html lang="en" />
        <title>{config('htmlPage.defaultTitle')}</title>
        <meta name="application-name" content={config('htmlPage.defaultTitle')} />
        <meta name="description" content={config('htmlPage.description')} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="apple-touch-icon-114x114.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="apple-touch-icon-144x144.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="apple-touch-icon-120x120.png"
        />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="apple-touch-icon-152x152.png"
        />
        <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <Header />
      <main className="container-fluid">
        <Router />
      </main>
      <Footer />
    </app>
  );
}

export default App;
