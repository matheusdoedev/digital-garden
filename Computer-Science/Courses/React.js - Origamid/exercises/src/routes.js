import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components
import Exercise1 from "./exercises/Exercise-1/index";
import Exercise2 from "./exercises/Exercise-2/index";
import Exercise3 from "./exercises/Exercise-3/index";
import Exercise4 from "./exercises/Exercise-4/index";
import Exercise5 from "./exercises/Exercise-5/index";
import Exercise6 from "./exercises/Exercise-6/index";
import Exercise7 from "./exercises/Exercise-7/index";
import Exercise8 from "./exercises/Exercise-8/index";
import Exercise9 from "./exercises/Exercise-9/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Exercise1} path="/exercise1" />
        <Route component={Exercise2} path="/exercise2" />
        <Route component={Exercise3} path="/exercise3" />
        <Route component={Exercise4} path="/exercise4" />
        <Route component={Exercise5} path="/exercise5" />
        <Route component={Exercise6} path="/exercise6" />
        <Route component={Exercise7} path="/exercise7" />
        <Route component={Exercise8} path="/exercise8" />
        <Route component={Exercise9} path="/exercise9/*" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
