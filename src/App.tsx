import React from "react";
import Layout from "~components/layout";
import Router from "./router/routes";
import "./App.scss";

const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
