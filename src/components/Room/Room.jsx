import React from "react";
import PropTypes from "prop-types";
import OffersList from "../OffersList/OffersList";
import CommentForm from "../CommentForm/CommentForm";
import RoomGoods from "../RoomGoods/RoomGoods";
import RoomGallery from "../RoomGallery/RoomGallery";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {ActionCreator} from "../../action";
import ReviewsList from "../ReviewsList/ReviewsList";
import Map from "../Map/Map";

const roomPropType = PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
    zoom: PropTypes.number
  }),
  previewImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  rating: PropTypes.number,
  type: PropTypes.oneOf([`house`, `room`, `apartment`, `hotel`]),
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  price: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.bool,
    avatarUrl: PropTypes.string
  }),
  description: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    londitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  id: PropTypes.number
});

class Room extends React.Component {
  constructor(props) {
    super(props);

    props.setRoomId(props.match.params.offerId);
  }

  componentDidUpdate() {
    if (this.props.room !== null && this.props.room !== undefined) {
      this.render();
    }
  }

  render() {
    if (this.props.room === null || this.props.room === undefined) {
      return <div>Loading room...</div>;
    }

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            {this.props.room.images.length && (
              <RoomGallery
                images={this.props.room.images}
                roomTitle={this.props.room.title}
              />
            )}
            <div className="property__container container">
              <div className="property__wrapper">
                {this.props.room.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {this.props.room.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (this.props.room.rating / 5 * 100) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{this.props.room.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire" style={{textTransform: `capitalize`}}>
                    {this.props.room.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {this.props.room.bedrooms
                      ? this.props.room.bedrooms + ` Bedroom` + (this.props.room.bedrooms > 1 ? `s` : ``)
                      : `No bedroom`
                    }
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {this.props.room.max_adults > 1 ? this.props.room.max_adults + ` Adults` : `1 Adult`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&#36;{this.props.room.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                {this.props.room.goods && (
                  <RoomGoods
                    goods={this.props.room.goods}
                  />
                )}
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`
                      property__avatar-wrapper
                      ${this.props.room.host.isPro ? `property__avatar-wrapper--pro` : ``}
                      user__avatar-wrapper
                    `}>
                      <img className="property__avatar user__avatar" src={`/${this.props.room.host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {this.props.room.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {this.props.room.description}
                    </p>
                  </div>
                </div>
              </div>
              <ReviewsList />
            </div>
          </div>
          <Map
            width={`100%`}
            height={`200px`}
          />
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={this.props.selectedCity.offers}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  selectedCity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    offers: PropTypes.arrayOf(roomPropType),
    coords: PropTypes.arrayOf(PropTypes.number)
  }),
  match: PropTypes.object,
  room: roomPropType,
  setRoomId: PropTypes.func,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  room: state.room,
});

const mapDispatchToProps = (dispatch) => ({
  setRoomId(roomId) {
    dispatch(ActionCreator.setRoomId(roomId));
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
