import React from "react";
import PropTypes from "prop-types";
import OffersList from "../OffersList/OffersList";
import CommentForm from "../CommentForm/CommentForm";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Room = (props) => {
  const room = (props.isFetching) ? null : props.offersByIds[props.match.params.offerId];

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
        {props.isFetching
        ? (
          <div style={{textAlign: `center`}}>Loading...</div>
        )
        : (
          <>
            <section className="property">
              {room.images.length && (
                <div className="property__gallery-container container">
                  <div className="property__gallery">
                    {room.images.map((image, index) => {
                      if (index >= 6) {
                        return null;
                      }
                      return (
                        <div key={index} className="property__image-wrapper">
                          <img className="property__image" src={image} alt={room.title} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              <div className="property__container container">
                <div className="property__wrapper">
                  {room.is_premium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {room.title}
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
                      <span style={{width: (room.rating / 5 * 100) + "%"}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{room.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire" style={{textTransform: `capitalize`}}>
                      {room.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {room.bedrooms
                        ? room.bedrooms > 1
                          ? room.bedrooms + ` Bedrooms`
                          : `1 Bedroom`
                        : `No bedroom`
                      }
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {room.max_adults > 1 ? room.max_adults + ` Adults` : `1 Adult`}
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&#36;{room.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  {room.goods && (
                    <div className="property__inside">
                      <h2 className="property__inside-title">What&apos;s inside</h2>
                      <ul className="property__inside-list">
                        {room.goods.map((goods, index) => (
                          <li key={index} className="property__inside-item">
                            {goods}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`
                        property__avatar-wrapper
                        ${room.host.is_pro ? `property__avatar-wrapper--pro` : ``}
                        user__avatar-wrapper
                      `}>
                        <img className="property__avatar user__avatar" src={`/${room.host.avatar_url}`} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        {room.host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {room.description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                    <ul className="reviews__list">
                      <li className="reviews__item">
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">
                            Max
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `80%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                          </p>
                          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                        </div>
                      </li>
                    </ul>
                    <CommentForm />
                  </section>
                </div>
              </div>
              <section className="property__map map"></section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OffersList
                    offers={props.selectedCityOffers}
                  />
                </div>
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

Room.propTypes = {
  room: PropTypes.object,
  isFetching: PropTypes.bool,
  selectedCityOffers: PropTypes.array,
  offersByIds: PropTypes.object
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  selectedCityOffers: state.selectedCityOffers,
  offersByIds: state.offersByIds
});

export {Room};
export default connect(mapStateToProps)(Room);
