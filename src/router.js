import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Step from "./components/Step";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/step/:step" component={Step} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;