import React from 'react';

const FormValidationError = (props) => {
  return <small className='text-danger'>{props.children}</small>;
};

export default FormValidationError;
