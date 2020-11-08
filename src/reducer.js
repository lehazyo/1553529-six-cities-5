import {ActionType} from "./action.js";
import {extend} from "./utils.js";

const filterByCityName = (offersArray, cityName) => {
  return offersArray.filter((offer) => offer.city.name === cityName);
};

const initialState = {
  cities: [],
  selectedCityId: null,
  selectedCityName: ``,
  selectedCityOffers: [],
  selectedCityCoords: [59.0, 30.0],
  offers: [],
  isFetching: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY_ID:
      return extend(state, {
        selectedCityId: action.payload,
        selectedCityName: state.cities[action.payload].name,
        selectedCityCoords: [
          state.cities[action.payload].location.latitude,
          state.cities[action.payload].location.longitude
        ],
        selectedCityOffers: filterByCityName(state.offers, state.cities[action.payload].name)
      });

    case ActionType.SET_OFFERS:
      let offersByIds = {};
      action.payload.forEach((offer) => {
        offersByIds[offer.id] = offer;
      });

      return extend(state, {
        offers: action.payload,
        offersByIds
      });

    case ActionType.SET_IS_FETCHING:
      return extend(state, {
        isFetching: action.payload
      });

    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload
      });
  }

  return state;
};

export {reducer};
