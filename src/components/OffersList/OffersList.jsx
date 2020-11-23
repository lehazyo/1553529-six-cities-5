import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../OfferCard/OfferCard";
import {offerPropType} from "../../propTypes/offerPropType";

class OffersList extends React.Component {
  render() {
    return this.props.offers.map((offer) => {
      return <OfferCard
        key={offer.id}
        offer={offer}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType),
};

export default OffersList;
