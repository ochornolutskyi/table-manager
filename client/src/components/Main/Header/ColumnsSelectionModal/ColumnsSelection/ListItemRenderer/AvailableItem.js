import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../DnD-types";

const AvailableItem = ({ value, columnId }) => {
   //DnD
   const [{ isDragging }, dragRef] = useDrag({
      item: { id: columnId, type: ItemTypes.AVAILABLE },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });
   const opacity = isDragging ? 0.5 : 1;

   return (
      <li style={{ opacity }} className="columns-list-item" ref={dragRef}>
         {value}
      </li>
   );
};

export default AvailableItem;
