import React from "react";
import { useSelector } from "react-redux";
import "./TableRow.scss";
import TableCell from "./TableCell";
import { COLUMNS } from "../../../../../Columns";

const TableRow = ({ itemData }) => {
   const columns = COLUMNS;
   const selectedIds = useSelector((state) => state.columns.selectedColumnsId);

   const selectedColumns = selectedIds.map((columnId) =>
      columns.find((column) => column.id === columnId)
   );
   const rowCells = selectedColumns.map((column) => (
      <TableCell key={column.id} column={column} itemData={itemData} />
   ));

   return <tr className="table-body-row">{rowCells}</tr>;
};

export default TableRow;
