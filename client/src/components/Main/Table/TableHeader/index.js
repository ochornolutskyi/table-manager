import React from "react";
import { useSelector } from "react-redux";
import "./TableHeader.scss";
import { COLUMNS } from "../../../../Columns";

const TableHeader = () => {
   const columns = COLUMNS;
   const selectedIds = useSelector((state) => state.columns.selectedColumnsId);
   const selectedColumns = selectedIds.map((columnId) =>
      columns.find((column) => column.id === columnId)
   );
   const headers = selectedColumns.map((column) => {
      return (
         <th className="header-cell" key={column.id}>
            {column.name}
         </th>
      );
   });

   return (
      <thead className="table-header">
         <tr>{headers}</tr>
      </thead>
   );
};

export default TableHeader;
