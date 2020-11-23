export const ActionType = {
  SET_CITY_ID: `SET_CITY_ID`,
  SET_OFFERS: `SET_OFERS`,
  SET_CITIES: `SET_CITIES`,
  SET_ROOM_ID: `SET_ROOM_ID`,
  SET_SORTING: `SET_SORTING`,
  SET_SORTING_POPUP_VISIBLE: `SET_SORTING_POPUP_VISIBLE`,
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
  }),
  setSorting: (value) => ({
    type: ActionType.SET_SORTING,
    payload: value,
  }),
  setSortingPopupVisible: (value) => ({
    type: ActionType.SET_SORTING_POPUP_VISIBLE,
    payload: value,
  }),
};
