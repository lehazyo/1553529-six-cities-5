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

const initialOffers = filterByCityName(offers, citiesArray[0].name);

const initialState = {
  cities: citiesArray,
  offersByIds,
  selectedCity: {
    id: 0,
    name: citiesArray[0].name,
    offers: initialOffers,
    sortedOffers: initialOffers,
    coords: [citiesArray[0].location.latitude, citiesArray[0].location.longitude]
  },
  offers,
  room: null,
  sorting: {
    id: `POPULAR`,
    name: `Popular`,
  },
  sortingPopupVisible: false,
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

    case ActionType.SET_SORTING:
      let sortedOffers = state.selectedCity.offers.slice();

      switch (action.payload.id) {
        case `PRICE_ASC`:
        case `PRICE_DESC`:
          sortedOffers.sort((a, b) => {
            if (action.payload.id === `PRICE_ASC`) {
              return (a.price > b.price) ? 1 : -1;
            } else {
              return (a.price > b.price) ? -1 : 1;
            }
          });
          break;

        case `RATING_DESC`:
          sortedOffers.sort((a, b) => {
            return (a.rating < b.rating) ? 1 : -1;
          });
          break;
      }

      const extendedSelectedCity = extend(state.selectedCity, {
        sortedOffers
      });

      return extend(state, {
        sorting: action.payload,
        selectedCity: extendedSelectedCity,
      });

    case ActionType.SET_SORTING_POPUP_VISIBLE:
      return extend(state, {
        sortingPopupVisible: action.payload
      });

    default:
      return state;
  }
};

export {reducer};
