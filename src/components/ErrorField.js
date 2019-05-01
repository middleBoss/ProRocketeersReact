import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ErrorField = (props) => {
  const { error } = props;
  return (
    <div className="error-message">
      <Alert color="danger">{error.message}</Alert>
    </div>
  );
};

ErrorField.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorField;
