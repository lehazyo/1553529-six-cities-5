import React from "react";
import OffersList from "../OffersList/OffersList";
import Cities from "../Cities/Cities";
import {selectedCityPropType} from "../../propTypes/selectedCityPropType";
import Map from "../Map/Map";
import {connect} from "react-redux";
import SortingPopup from "../SortingPopup/SortingPopup";

const Main = (props) => {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.selectedCity.offers.length} places to stay in {props.selectedCity.name}</b>
              <SortingPopup />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={props.selectedCity.sortedOffers}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                width={`512px`}
                height={`100%`}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  selectedCity: selectedCityPropType,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
});

export {Main};
export default connect(mapStateToProps)(Main);
