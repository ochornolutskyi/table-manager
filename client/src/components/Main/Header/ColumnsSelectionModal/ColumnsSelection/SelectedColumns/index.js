import React, { useMemo } from "react";
import SelectedItem from "../ListItemRenderer/SelectedItem";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../DnD-types";

const SelectedColumns = ({ columns, selectedIds, setSelectedIds }) => {
   //DnD
   const [dropProps, dropRef] = useDrop({
      accept: ItemTypes.AVAILABLE,
      drop: (item) => {
         const newSelectedIds = [...selectedIds].concat(item.id);
         setSelectedIds(newSelectedIds);
      },
   });

   const selectedColumns = selectedIds.map((id) =>
      columns.find((column) => column.id === id)
   );
   const removeSelectedItemClickHandler = (columnId) => {
      const newSelectedIds = selectedIds.filter((id) => id !== columnId);
      setSelectedIds(newSelectedIds);
   };
   const selectedColumnsList = selectedColumns.map((column) => (
      <SelectedItem
         key={column.id}
         columnId={column.id}
         value={column.name}
         removeSelectedItemClickHandler={removeSelectedItemClickHandler}
      />
   ));

   return (
      <ul className="selected-ul" ref={dropRef}>
         {selectedColumnsList}
      </ul>
   );
};

export default SelectedColumns;
