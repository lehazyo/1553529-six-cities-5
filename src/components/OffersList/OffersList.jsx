import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../OfferCard/OfferCard";
import {connect} from "react-redux";

class OffersList extends React.Component {
  render() {
    return this.props.selectedCityOffers.map((offer) => {
      return <OfferCard
        key={offer.id}
        offer={offer}
      />;
    });
  }
}

OffersList.propTypes = {
  selectedCityOffers: PropTypes.array
};

const mapStateToProps = (state) => ({
  selectedCityOffers: state.selectedCityOffers
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
