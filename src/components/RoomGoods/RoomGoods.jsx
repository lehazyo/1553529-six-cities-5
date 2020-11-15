import React from "react";
import PropTypes from "prop-types";

const RoomGoods = (props) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {props.goods.map((goods, index) => (
          <li key={index} className="property__inside-item">
            {goods}
          </li>
        ))}
      </ul>
    </div>
  );
};

RoomGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

export default RoomGoods;
