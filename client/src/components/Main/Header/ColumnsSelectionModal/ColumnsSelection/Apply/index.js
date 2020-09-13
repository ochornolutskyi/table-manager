import React from "react";
import Button from "../../../../../Button";
import { useDispatch } from "react-redux";
import {
   closeModal,
   setSelectedColumnsId,
} from "../../../../../../redux/actions";

const Apply = ({ selectedIds }) => {
   const dispatch = useDispatch();
   return (
      <Button
         buttonText="Apply"
         className="apply"
         buttonClickHandler={() => {
            dispatch(setSelectedColumnsId(selectedIds));
            dispatch(closeModal());
         }}
      />
   );
};

export default Apply;
