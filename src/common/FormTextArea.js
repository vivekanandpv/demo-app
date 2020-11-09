import React, { Fragment } from 'react';

const FormTextArea = (props) => {
  return (
    <Fragment>
      <div className='form-group'>
        <label>{props.label}</label>
        <textarea
          className='form-control'
          rows='3'
          name={props.name}
          onInput={(e) => props.onChange(e.target.name, e.target.value)}
        ></textarea>
      </div>
    </Fragment>
  );
};

export default FormTextArea;
