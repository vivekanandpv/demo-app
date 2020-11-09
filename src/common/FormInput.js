import React, { Fragment } from 'react';

const FormInput = (props) => {
  return (
    <Fragment>
      <div className='form-group'>
        <label>{props.label}</label>
        <input
          type={props.type ? props.type : 'text'}
          className='form-control'
          name={props.name}
          onInput={(e) => props.onChange(e.target.name, e.target.value)}
        />
        <small className='text-danger'>{props.errorMessage}</small>
      </div>
    </Fragment>
  );
};

export default FormInput;
