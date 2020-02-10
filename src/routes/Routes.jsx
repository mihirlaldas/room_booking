import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/common/Home";
import Booking from "../components/common/Booking";
import Confirm from "../components/common/Confirm";
import ErrorPage from "../components/common/ErrorPage";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/booking" component={Booking} />
        <Route path="/confirm" component={Confirm} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}
