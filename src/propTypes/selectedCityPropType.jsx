import PropTypes from "prop-types";
import {offerPropType} from "./offerPropType";

export const selectedCityPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  offers: PropTypes.arrayOf(offerPropType),
  coords: PropTypes.arrayOf(PropTypes.number)
});
