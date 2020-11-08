import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../Main/Main";
import Sign from "../Sign/Sign";
import Favorites from "../Favorites/Favorites";
import Room from "../Room/Room";
import {connect} from "react-redux";
import {ActionCreator} from "../../action.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    const offersFetch = fetch(`https://5.react.pages.academy/six-cities/hotels`);

    offersFetch
      .then((response) => response.json())
      .then((responseObject) => {
        let citiesObject = {};
        let citiesArray = [];

        responseObject.forEach((offer) => {
          if (citiesObject[offer.city.name] !== undefined) {
            return;
          }
          citiesObject[offer.city.name] = offer.city;
          citiesArray.push(offer.city);
        });

        props.setCities(citiesArray);
        props.setOffers(responseObject);
        props.setCityId(0);
        props.setIsFetching(false);
      });
  }

  render() {
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
  }
}

App.propTypes = {
  setCities: PropTypes.func,
  setOffers: PropTypes.func,
  setCityId: PropTypes.func,
  setIsFetching: PropTypes.func
};

const mapStateToProps = (state) => ({
  selectedCityOffers: state.selectedCityOffers
});

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
  setIsFetching(value) {
    dispatch(ActionCreator.setIsFetching(value));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
