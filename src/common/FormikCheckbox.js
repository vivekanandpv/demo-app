import React, { Fragment } from 'react';

const FormikCheckBox = (props) => {
  return (
    <Fragment>
      <input type='checkbox' className='form-check-input' {...props} />
    </Fragment>
  );
};

export default FormikCheckBox;
