import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../container/homepage/index";
import { DetailMovies } from "../container/detail/index";

const Main = () => {
  return (
        <Switch>
          	<Route exact path="/" component={HomePage} />
			<Route exact path="/detail" component={DetailMovies} />
        </Switch>
  );
};

export default Main;
