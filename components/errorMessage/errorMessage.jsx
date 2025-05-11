import { ErrorMessage } from "formik";
import React from "react";

const CustomErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="mt-1"
      style={{ color: "red", fontSize: "12.5px" }}
    />
  );
};

export default CustomErrorMessage;
