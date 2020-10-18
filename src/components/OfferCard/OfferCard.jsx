import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class OfferCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnMouseLeave() {
    this.props.setActiveComponent(0);
  }

  handleOnMouseEnter() {
    this.props.setActiveComponent(this.props.offer.id);
  }

  render() {
    let theOffer = this.props.offer;
    return (
      <article
        onMouseLeave={this.handleOnMouseLeave.bind(this)}
        onMouseEnter={this.handleOnMouseEnter.bind(this)}
        className="near-places__card place-card"
        style={{border: (this.props.isActive ? `10px solid #ff0000` : `none`)}}
      >
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <Link to={`/offer/${theOffer.id}`}>
            <img className="place-card__image" src="/img/room.jpg" width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&#36;{theOffer.pricePerNight}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{theOffer.title}</a>
          </h2>
          <p className="place-card__type">Private room</p>
        </div>
      </article>
    );
  }
}

OfferCard.propTypes = {
  offer: PropTypes.object,
  isActive: PropTypes.bool,
  setActiveComponent: PropTypes.func
};

export default OfferCard;
