import React, { Fragment } from 'react';

const FormikInput = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} />
    </Fragment>
  );
};

export default FormikInput;
