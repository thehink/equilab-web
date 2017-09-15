import React from 'react';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';

import FrontPage from './FrontPage';
import Error404 from './Error404';

const router = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route component={Error404} />
  </Switch>
  );

export default router;
