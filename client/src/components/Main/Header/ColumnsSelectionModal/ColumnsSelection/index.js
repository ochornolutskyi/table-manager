import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import "./ColumnsSelection.scss";
import AvailableColumns from "./AvailableColumns";
import SelectedColumns from "./SelectedColumns";
import Apply from "./Apply";
import ListWrapper from "./ListWrapper";
import ColumnTitle from "./ColumnTitle";
import { COLUMNS } from "../../../../../Columns";

//TODO:TOUCH DND DOESN'T WORK
const ColumnsSelection = () => {
   const selectedColumnsId = useSelector(
      (state) => state.columns.selectedColumnsId
   );
   const [selectedColumnsIdModal, setSelectedColumnsIdModal] = useState(
      selectedColumnsId
   );
   const columns = COLUMNS;

   return (
      <DndProvider backend={(TouchBackend, HTML5Backend)}>
         <div className="columns-selection">
            <div className="columns-selection__lists">
               <ListWrapper>
                  <ColumnTitle title="Available" />
                  <AvailableColumns
                     columns={columns}
                     selectedIds={selectedColumnsIdModal}
                  />
               </ListWrapper>
               <hr />
               <ListWrapper>
                  <ColumnTitle title="Selected" />
                  <SelectedColumns
                     columns={columns}
                     selectedIds={selectedColumnsIdModal}
                     setSelectedIds={setSelectedColumnsIdModal}
                  />
               </ListWrapper>
            </div>
            <Apply selectedIds={selectedColumnsIdModal} />
         </div>
      </DndProvider>
   );
};

export default ColumnsSelection;
