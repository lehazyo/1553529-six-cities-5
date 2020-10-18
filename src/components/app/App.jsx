import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";
import Favorites from "../Favorites/Favorites";
import Room from "../Room/Room";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offers={props.offers}
          />
        </Route>
        <Route exact path="/login">
          <Sign />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:offerId">
          <Room
            room={props.offers[0]}
            offers={props.offers}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array
};

export default App;
