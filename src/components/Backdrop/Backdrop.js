import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  //  Always gets Backdrop, then 1 of the other 2.
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  //    The 'join()' turns the array into a string or something, idk.
  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
