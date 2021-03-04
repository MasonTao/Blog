import React from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
// import Home from "~containers/home";
// const Home = lazy(() => import("~containers/home"));
const Home = loadable(
  () => import(/*webpackChunkName: "Home" */ "~containers/home")
);

const Router = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
};

export default Router;
