import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";
import Favorites from "../Favorites/Favorites";
import Room from "../Room/Room";
import {connect} from "react-redux";
import {ActionCreator} from "../../action.js";

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
        <Route
          exact
          path="/offer/:offerId"
          component={Room}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  setCities: PropTypes.func,
  setOffers: PropTypes.func,
  setCityId: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setCities(cities) {
    dispatch(ActionCreator.setCities(cities));
  },
  setOffers(offers) {
    dispatch(ActionCreator.setOffers(offers));
  },
  setCityId(cityId) {
    dispatch(ActionCreator.setCityId(cityId));
  },
});

export {App};
export default connect(mapDispatchToProps)(App);
