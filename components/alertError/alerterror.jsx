import React from "react";

const AlertError = ({ error }) => {
  return (
    <div>
      <p className="text-red-800 text-sm">{error}</p>
    </div>
  );
};

export default AlertError;
