import React from "react";

import { Router, Switch, Route } from "react-router";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/homePage";

import { history } from "../history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/home" />
      <Route component={HomePage} exact path="/index" />

      <PrivateRoute component={HomePage} exact path="/" />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
