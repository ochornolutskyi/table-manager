import { combineReducers } from "redux";
import tableReducer from "./reducers/tableReducer";
import columnsReducer from "./reducers/columnsReducer";

export const rootReducer = combineReducers({
   table: tableReducer,
   columns: columnsReducer,
});
