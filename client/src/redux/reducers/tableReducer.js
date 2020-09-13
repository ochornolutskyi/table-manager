import {
   FETCH_DATA,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAILED,
} from "../types";

const initialState = {
   loader: null,
   data: [],
};
const tableReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return { ...state, loader: true };
      case FETCH_DATA_SUCCESS:
         return { ...state, data: action.payload, loader: false };
      case FETCH_DATA_FAILED:
         return { ...state, data: null, loader: false };
    
      default:
         return state;
   }
};

export default tableReducer;
