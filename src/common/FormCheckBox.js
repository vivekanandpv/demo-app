import React, { Fragment } from 'react';

const FormCheckBox = (props) => {
  return (
    <Fragment>
      <div className='form-group form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          name={props.name}
          onInput={(e) => props.onChange(e.target.name, e.target.checked)}
        />
        <label className='form-check-label'>{props.label}</label>
      </div>
    </Fragment>
  );
};

export default FormCheckBox;
