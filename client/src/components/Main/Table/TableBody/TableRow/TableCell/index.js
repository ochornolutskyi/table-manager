import React from "react";
import "./TableCell.scss";

const TableCell = ({ itemData, column }) => {
   const value = itemData[column.key];
   const Renderer = column.renderer;

   return (
      <td className="table-row-cell">
         <Renderer value={value} />
      </td>
   );
};

export default TableCell;
