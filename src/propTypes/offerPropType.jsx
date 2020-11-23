import PropTypes from "prop-types";

export const offerPropType = PropTypes.shape({
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
