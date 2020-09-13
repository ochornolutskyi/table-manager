import React from "react";
import CrossButton from "../../../../../CrossButton";

const SelectedItem = ({ value, columnId, removeSelectedItemClickHandler }) => {
   return (
      <li className="columns-list-item selected-ul__item">
         <span>{value}</span>
         <CrossButton
            columnId={columnId}
            buttonClickHandler={() => removeSelectedItemClickHandler(columnId)}
         />
      </li>
   );
};

export default SelectedItem;
