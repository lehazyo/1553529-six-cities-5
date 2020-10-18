import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../OfferCard/OfferCard";

class OffersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "activeId": 0
    };
  }

  setActiveComponent(cardId) {
    this.setState({
      "activeId": cardId
    });
  }

  render() {
    let offersArray = [];
    for (let i = 0; i < this.props.offers.length; i++) {
      let offerComponent = (
        <OfferCard
          key={this.props.offers[i].id}
          isActive={this.state.activeId === this.props.offers[i].id}
          offer={this.props.offers[i]}
          setActiveComponent={this.setActiveComponent.bind(this)}
        />
      );
      offersArray.push(offerComponent);
    }

    return offersArray;
  }
}

OffersList.propTypes = {
  offers: PropTypes.array
};

export default OffersList;
