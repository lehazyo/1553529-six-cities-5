import PropTypes from "prop-types";

export const offerPropType = PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPro: PropTypes.bool,
    avatarUrl: PropTypes.string
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    londitude: PropTypes.number,
    zoom: PropTypes.number
  }),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.oneOf([`house`, `room`, `apartment`, `hotel`]),
});
