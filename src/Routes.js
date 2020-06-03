import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/app/Layout";
import Home from "./components/app/Home";
import NotFound from "./NotFound";
import RecentFinds from "./components/recentFinds/RecentFinds";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={RecentFinds} path="/recent" />
          <Route component={Home} exact path="/" />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
