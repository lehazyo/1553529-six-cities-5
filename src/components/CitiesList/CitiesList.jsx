import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

class CitiesList extends React.Component {
  handleOnClick(cityId) {
    this.props.setCityId(cityId);
  }

  render() {
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {this.props.cities.map((city, index) => {
            return (
              <li
                key={index}
                className="locations__item"
                onClick={this.handleOnClick.bind(this, index)}
              >
                <a className={`locations__item-link tabs__item ${(this.props.selectedCityName === city.name) && `tabs__item--active`}`} href="#">
                  <span>{city.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.array,
  selectedCityName: PropTypes.string,
  setCityId: PropTypes.func
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCityName: state.selectedCityName
});

const mapDispatchToProps = (dispatch) => ({
  setCityId(cityId) {
    dispatch(ActionCreator.setCityId(cityId));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
