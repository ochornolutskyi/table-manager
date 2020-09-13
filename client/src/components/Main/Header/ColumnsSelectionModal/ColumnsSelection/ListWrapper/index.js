import React from "react";
import "./ListWrapper.scss";

const ListWrapper = (props) => {
   return <div className="list-wrapper">{props.children}</div>;
};

export default ListWrapper;
