import React from "react";
import PropTypes from "prop-types";
import CityItem from "../CityItem/CityItem";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

const Cities = (props) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {props.cities.map((city, index) =>
          <CityItem
            cityName={city.name}
            key={index}
            isSelected={props.selectedCity.name === city.name}
            handleOnClick={() => {
              props.setCityId(index);
            }}
          />)}
      </ul>
    </section>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
    zoom: PropTypes.number
  })),
  selectedCity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    offers: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        }),
        zoom: PropTypes.number
      }),
      previewImage: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      isFavorite: PropTypes.bool,
      isPremium: PropTypes.bool,
      rating: PropTypes.number,
      type: PropTypes.oneOf([`house`, `room`, `apartment`, `hotel`]),
      bedrooms: PropTypes.number,
      maxAdults: PropTypes.number,
      price: PropTypes.number,
      goods: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        isPro: PropTypes.bool,
        avatarUrl: PropTypes.string
      }),
      description: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        londitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      id: PropTypes.number
    })),
    coords: PropTypes.arrayOf(PropTypes.number)
  }),
  setCityId: PropTypes.func
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCity: state.selectedCity
});

const mapDispatchToProps = (dispatch) => ({
  setCityId(cityId) {
    dispatch(ActionCreator.setCityId(cityId));
  }
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
