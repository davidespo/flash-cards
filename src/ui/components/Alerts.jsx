import React from "react";

export const ErrorAlert = ({
  title = "Something Went Wrong!",
  message,
  children,
}) => (
  <Alert title={title} kind="danger">
    {!!message && <pre>&gt; {message}</pre>}
    {children}
  </Alert>
);

export const WarningAlert = ({ title, children }) => (
  <Alert title={title} kind="warning">
    {children}
  </Alert>
);

export const SuccessAlert = ({ title, children }) => (
  <Alert title={title} kind="success">
    {children}
  </Alert>
);

export const InfoAlert = ({ title, children }) => (
  <Alert title={title} kind="info">
    {children}
  </Alert>
);

export const PrimaryAlert = ({ title, children }) => (
  <Alert title={title} kind="primary">
    {children}
  </Alert>
);

const Alert = ({ title, kind = "info", children }) => {
  return (
    <div className={`alert alert-${kind}`}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
};

export default Alert;
