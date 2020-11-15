import React from "react";
import PropTypes from "prop-types";

const RoomGallery = (props) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {props.images.map((image, index) => {
          if (index >= 6) {
            return null;
          }
          return (
            <div key={index} className="property__image-wrapper">
              <img className="property__image" src={image} alt={props.roomTitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

RoomGallery.propTypes = {
  roomTitle: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

export default RoomGallery;
