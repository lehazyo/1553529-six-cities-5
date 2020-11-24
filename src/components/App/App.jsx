import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";
import Favorites from "../Favorites/Favorites";
import Room from "../Room/Room";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../../reducer.js";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

App.propTypes = {
  setCities: PropTypes.func,
  setOffers: PropTypes.func,
  setCityId: PropTypes.func
};

export default App;
