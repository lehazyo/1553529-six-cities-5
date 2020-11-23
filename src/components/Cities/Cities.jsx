import React from "react";
import PropTypes from "prop-types";
import CityItem from "../CityItem/CityItem";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";
import {selectedCityPropType} from "../../propTypes/selectedCityPropType";

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
  selectedCity: selectedCityPropType,
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
