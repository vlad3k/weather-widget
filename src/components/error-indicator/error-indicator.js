import React from "react";

import "./error-indicator.css";

//icons
import ErrorIcon from "../../icons/Error";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <ErrorIcon width={60} height={60} />
      <span>Something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
