import React, { useState, useMemo } from "react";
import AvailableSearch from "./AvailableSearch";
import AvailableItem from "../ListItemRenderer/AvailableItem";

const AvailableColumns = ({ columns, selectedIds }) => {
   const availableColumns = useMemo(() => {
      return columns
         .filter((column) => !selectedIds.includes(column.id))
         .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
   }, [columns, selectedIds]);
   const [searchableValue, setSearchableValue] = useState("");
   const filteredList = availableColumns.filter((item) =>
      item.name.toLowerCase().includes(searchableValue.toLowerCase().trim())
   );

   const availableColumnsList = useMemo(() => {
      return filteredList.map((column) => (
         <AvailableItem
            key={column.id}
            value={column.name}
            columnId={column.id}
         />
      ));
   }, [filteredList]);

   return (
      <ul className="available-ul">
         <AvailableSearch setSearchableValue={setSearchableValue} />
         {availableColumnsList}
      </ul>
   );
};

export default AvailableColumns;
