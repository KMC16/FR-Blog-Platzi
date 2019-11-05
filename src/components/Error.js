import React from "react";

import "./Error.css";
const Error = props => (
  <div className="Error__container">
    <div className="Error__content">
      <h2>{props.mensaje}</h2>
    </div>
  </div>
);
export default Error;
