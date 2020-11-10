import React, { Fragment } from 'react';

const Demo = (props) => {
  const parentHandler = (e) => {
    console.log('Parent Handler', e);
    return (e) => {
      console.log('Clever handler', e);
    };
  };

  return (
    <Fragment>
      <SampleInput onInput={parentHandler} />
    </Fragment>
  );
};

const SampleInput = (props) => {
  return (
    <Fragment>
      <input className='form-control' onInput={props.onInput('Default')} />
    </Fragment>
  );
};

export default Demo;
