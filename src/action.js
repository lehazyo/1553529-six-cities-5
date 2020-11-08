export const ActionType = {
  SET_CITY_ID: `SET_CITY_ID`,
  SET_OFFERS: `SET_OFERS`,
  SET_IS_FETCHING: `SET_IS_FETCHING`,
  SET_CITIES: `SET_CITIES`
};

export const ActionCreator = {
  setCityId: (cityId) => ({
    type: ActionType.SET_CITY_ID,
    payload: cityId
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers
  }),
  setIsFetching: (value) => ({
    type: ActionType.SET_IS_FETCHING,
    payload: value
  }),
  setCities: (value) => ({
    type: ActionType.SET_CITIES,
    payload: value
  })
};
