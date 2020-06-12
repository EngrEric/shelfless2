import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/app/Layout";
import Home from "./components/app/Home";
import NotFound from "./NotFound";
import RecentFinds from "./components/recentFinds/RecentFinds";
import ProductDetails from "./components/ListProducts/ProductDetails";
import ReportAFind from "./components/ReportAFind/reportAFind";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={RecentFinds} path="/recent" />
          <Route component={Home} exact path="/" />
          <Route component={ProductDetails} path="/details/:id" />
          <Route component={ReportAFind} path="/reportafind" />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
