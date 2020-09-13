import { SHOW_MODAL, CLOSE_MODAL, SET_SELECTED_COLUMNS_ID } from "../types";
import { DEFAULT_COLUMNS_ID } from "../../Columns";

const columns = {
   isShowColumnsSelection: false,
   selectedColumnsId: DEFAULT_COLUMNS_ID,
};

const isShowingModalReducer = (state = columns, action) => {
   switch (action.type) {
      case SHOW_MODAL:
         return { ...state, isShowColumnsSelection: true };
      case CLOSE_MODAL:
         return { ...state, isShowColumnsSelection:false };
      case SET_SELECTED_COLUMNS_ID:
         return { ...state, selectedColumnsId: [...action.payload] };
      default:
         return state;
   }
};

export default isShowingModalReducer;
