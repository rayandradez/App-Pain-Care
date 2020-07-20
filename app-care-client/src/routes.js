
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}