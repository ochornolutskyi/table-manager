import {
   FETCH_DATA,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_FAILED,
   SHOW_MODAL,
   CLOSE_MODAL,
   SET_SELECTED_COLUMNS_ID,
} from "./types";

export const fetchData = () => {
   return (dispatch) => {
      dispatch({ type: FETCH_DATA });
      return fetch("/api/*", { method: "GET" })
         .then((response) => response.json())
         .then((json) =>
            dispatch({ type: FETCH_DATA_SUCCESS, payload: json.data })
         )
         .catch(() => dispatch({ type: FETCH_DATA_FAILED }));
   };
};

export const showModal = () => {
   return {
      type: SHOW_MODAL,
   };
};

export const closeModal = () => {
   return {
      type: CLOSE_MODAL,
   };
};

export const setSelectedColumnsId = (ids) => {
   return {
      type: SET_SELECTED_COLUMNS_ID,
      payload: ids,
   };
};
