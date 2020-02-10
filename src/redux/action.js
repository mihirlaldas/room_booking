export const LOAD_DATA = "LOAD_DATA";
export const ADD_BOOKING_ID = "ADD_BOOKING_ID";
export const loadData = data => {
  return {
    type: LOAD_DATA,
    payload: data
  };
};
export const addBookingId = data => {
  return {
    type: ADD_BOOKING_ID,
    payload: data
  };
};
export default {
  LOAD_DATA,
  loadData,
  ADD_BOOKING_ID,
  addBookingId
};
