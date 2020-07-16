import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Appointments from '../pages/Appointments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/appointments" component={Appointments} />
  </Switch>
);

export default Routes;
