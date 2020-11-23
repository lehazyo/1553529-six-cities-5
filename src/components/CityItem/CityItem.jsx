import React from "react";
import PropTypes from "prop-types";

const CityItem = (props) => {
  return (
    <li
      className="locations__item"
      onClick={props.handleOnClick}
    >
      <a
        className={`locations__item-link tabs__item ${(props.isSelected) && `tabs__item--active`}`}
        href="#"
      >
        <span>{props.cityName}</span>
      </a>
    </li>
  );
};

CityItem.propTypes = {
  cityName: PropTypes.string,
  handleOnClick: PropTypes.func,
  isSelected: PropTypes.bool
};

export default CityItem;
