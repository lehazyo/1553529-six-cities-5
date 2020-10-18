import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../OfferCard/OfferCard";

class OffersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 0
    };
  }

  setActiveComponent(cardId) {
    this.setState({
      activeId: cardId
    });
  }

  render() {
    return this.props.offers.map((offer) => {
      return <OfferCard
        key={offer.id}
        isActive={this.state.activeId === offer.id}
        offer={offer}
        setActiveComponent={this.setActiveComponent.bind(this)}
      />;
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.array
};

export default OffersList;
