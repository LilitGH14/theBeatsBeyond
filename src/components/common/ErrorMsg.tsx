import React from "react";

const ErrorMsg = ({ error }: any) => {
  return (
    <p data-testid="error_msg_id" style={{ color: "red", fontSize: "12px" }}>
      {error}
    </p>
  );
};

export default ErrorMsg;
