import {ActionType} from "./action.js";
import {extend} from "./utils.js";
import offers from "./mocks/offers.json";

let citiesObject = {};
let citiesArray = [];
let offersByIds = {};
offers.forEach((offer) => {
  offersByIds[offer.id] = offer;
});

offers.forEach((offer) => {
  if (citiesObject[offer.city.name] !== undefined) {
    return;
  }
  citiesObject[offer.city.name] = true;
  citiesArray.push(offer.city);
});

const filterByCityName = (offersArray, cityName) => {
  return offersArray.filter((offer) => offer.city.name === cityName);
};

const initialState = {
  cities: citiesArray,
  offersByIds,
  selectedCity: {
    id: 0,
    name: citiesArray[0].name,
    offers: filterByCityName(offers, citiesArray[0].name),
    coords: [citiesArray[0].location.latitude, citiesArray[0].location.longitude]
  },
  offers,
  room: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY_ID:
      return extend(state, {
        selectedCity: {
          id: action.payload,
          name: state.cities[action.payload].name,
          coords: [
            state.cities[action.payload].location.latitude,
            state.cities[action.payload].location.longitude
          ],
          offers: filterByCityName(state.offers, state.cities[action.payload].name)
        }
      });

    case ActionType.SET_OFFERS:
      let tempOffersByIds = {};
      action.payload.forEach((offer) => {
        tempOffersByIds[offer.id] = offer;
      });

      return extend(state, {
        offers: action.payload,
        offersByIds: tempOffersByIds
      });

    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload
      });

    case ActionType.SET_ROOM_ID:
      return extend(state, {
        room: state.offersByIds[action.payload]
      });
  }

  return state;
};

export {reducer};
