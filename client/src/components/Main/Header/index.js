import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import Title from "../Title";
import { TABLE_TITLE } from "../../../Columns";
import Button from "../../Button";
import ColumnsSelectionModal from "./ColumnsSelectionModal";
import { showModal } from "../../../redux/actions";

const Header = () => {
   const title = TABLE_TITLE;
   const isShowingColumnsSelectionModal = useSelector(
      (state) => state.columns.isShowColumnsSelection
   );
   const dispatch = useDispatch();

   return (
      <header className="main-header">
         <Title title={title} />
         <Button
            buttonText="Select Grid Columns"
            buttonClickHandler={() => dispatch(showModal())}
         />
         {isShowingColumnsSelectionModal ? <ColumnsSelectionModal /> : null}
      </header>
   );
};

export default Header;
