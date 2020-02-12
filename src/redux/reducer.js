import { ADD_BOOKING_ID, TIMER, TOHOME, SET_AVAILABLE, ATHOME } from "./action";
import data from "../components/common/meeting_room_data";

const initialState = {
  rooms: JSON.parse(localStorage.getItem("meeting")) || data,
  toHome: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING_ID:
      return {
        ...state,
        available: false,
        bookingId: action.payload
      };
      break;
    case TIMER:
      return state;
    case TOHOME:
      return {
        ...state,
        toHome: true
      };
    case ATHOME:
      return {
        ...state,
        toHome: false
      };
    case SET_AVAILABLE:
      let updatedRooms = state.rooms.map(ele => {
        if (ele.id === Number(action.payload)) ele.available = false;
        return ele;
      });
      // console.log(updatedRooms);
      return {
        ...state,
        rooms: updatedRooms
      };
    default:
      return state;
  }
};

export default reducer;
