import React from "react";
import "./Table.scss";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
   return (
      <table className="table">
         <TableHeader />
         <TableBody />
      </table>
   );
};

export default Table;
