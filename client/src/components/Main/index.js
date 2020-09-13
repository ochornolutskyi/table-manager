import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Table from "./Table";

const Main = () => {
   const selectedColumnsId = useSelector(
      (state) => state.columns.selectedColumnsId
   );
   return (
      <React.Fragment>
         <Header />
         <main className="main">
            {selectedColumnsId.length > 0 ? (
               <Table />
            ) : (
               <p style={{ fontSize: "1.15em" }}>Please, set the columns to show</p>
            )}
         </main>
      </React.Fragment>
   );
};

export default Main;
