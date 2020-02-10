import { LOAD_DATA, loadData, ADD_BOOKING_ID } from "./action";
import data from "../components/common/meeting_room_data";

const initialState = {
  rooms: data
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: loadData(action.payload)
      };
      break;
    case ADD_BOOKING_ID:
      return {
        ...state,
        available: false,
        bookingId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
