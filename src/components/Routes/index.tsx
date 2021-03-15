import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Details from '../../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/details/:positionId" component={Details} />
    <Route path="/" component={Home} exact />
  </Switch>
);

export default Routes;
