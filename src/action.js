export const ActionType = {
  SET_CITY_ID: `SET_CITY_ID`,
  SET_OFFERS: `SET_OFERS`,
  SET_CITIES: `SET_CITIES`,
  SET_ROOM_ID: `SET_ROOM_ID`,
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
  setCities: (value) => ({
    type: ActionType.SET_CITIES,
    payload: value
  }),
  setRoomId: (value) => ({
    type: ActionType.SET_ROOM_ID,
    payload: value
  })
};
