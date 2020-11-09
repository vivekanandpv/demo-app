import React, { Fragment } from 'react';

const FormSelect = (props) => {
  return (
    <Fragment>
      <div className='form-group'>
        <label>{props.label}</label>
        <select
          className='form-control'
          name={props.name}
          onInput={(e) => props.onChange(e.target.name, e.target.value)}
        >
          <option>--- Please Select ---</option>
          {props.options
            ? props.options.map((o, i) => {
                return (
                  <option value={o.value} key={i}>
                    {o.text}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </Fragment>
  );
};

export default FormSelect;
