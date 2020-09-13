import React from "react";

const PasswordCell = ({ value, ...props }) => {
   return (
      <span
         style={{
            color: "rgba(33, 32, 32, 1)",
            backgroundColor: "none",
            display: "block",
         }}
      >
         {value}
      </span>
   );
};

export default PasswordCell;
