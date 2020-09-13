import React, { useState, useEffect } from "react";
import "./Button.scss";

const Button = ({ className, buttonClickHandler, buttonText }) => {
   const classes = className ? className + " button" : "button";

   return (
      <button className={classes} onClick={buttonClickHandler}>
         {buttonText}
      </button>
   );
};

export default Button;
