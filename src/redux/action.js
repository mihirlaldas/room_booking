export const ADD_BOOKING_ID = "ADD_BOOKING_ID";
export const SET_AVAILABLE = "SET_AVAILABLE";
export const TIMER = "TIMER";
export const TOHOME = "TOHOME";
export const ATHOME = "ATHOME";

export const setAvailable = id => {
  return {
    type: SET_AVAILABLE,
    payload: id
  };
};
export const addBookingId = data => {
  return {
    type: ADD_BOOKING_ID,
    payload: data
  };
};

export const toHome = () => {
  return {
    type: TOHOME
  };
};
export const atHome = () => {
  return {
    type: ATHOME
  };
};
export const timer = () => {
  return dispatch => {
    setTimeout(() => dispatch(toHome()), 5000);
  };
};

export default {
  ADD_BOOKING_ID,
  addBookingId,
  TIMER,
  timer,
  TOHOME,
  toHome
};
