import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";
import Favorites from "../Favorites/Favorites";
import Offer from "../Offer/Offer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Sign />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:offerId">
          <Offer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
