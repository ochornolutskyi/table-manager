import React from "react";
import "./ColumnsSelectionModal.scss";
import ColumnsSelection from "./ColumnsSelection";
import Title from "../../Title";
import CrossButton from "../../../CrossButton";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../redux/actions";

const ColumnsSelectionModal = () => {
   const dispatch = useDispatch();

   return (
      <div className="modal-window">
         <Title title="Select columns for the grid" />
         <CrossButton buttonClickHandler={() => dispatch(closeModal())} />
         <ColumnsSelection />
      </div>
   );
};

export default ColumnsSelectionModal;
