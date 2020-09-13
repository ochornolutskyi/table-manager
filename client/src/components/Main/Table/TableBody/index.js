import React from "react";
import { useSelector } from "react-redux";
import "./TableBody.scss";
import TableRow from "./TableRow";

const TableBody = () => {
   const data = useSelector((state) => state.table.data);
   const tableRows = data.map((item) => (
      <TableRow key={item.id} itemData={item} />
   ));
   return <tbody className="table-body">{tableRows}</tbody>;
};

export default TableBody;
