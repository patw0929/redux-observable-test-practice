import React from 'react';

const ErrorMessage = ({ text }) => (
  <div className="alert alert-danger" role="alert">
    <strong>Oops!</strong> {text}
  </div>
);

export default ErrorMessage;
