import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

// FormInput.propTypes = {
//   label: PropTypes.string,
//   type?: PropTypes.string,
//   name: PropTypes.string,
//   errorMessage: PropTypes.string
// }

export default FormInput;
