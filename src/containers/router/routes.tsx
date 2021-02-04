import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "~containers/home";

const Router = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
};

export default Router;
