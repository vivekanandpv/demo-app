import React, { Fragment } from 'react';

const Demo = (props) => {
  const styles = {
    input: { fontWeight: 'bold' },
    teju: {
      color: 'red',
      border: '1px solid gray',
      padding: '4px',
    },
  };
  return (
    <Fragment>
      <div className='container my-5'>
        <input className='form-control' />
        <hr />
        <p>
          This is a paragraph <span style={styles.teju}>This is span</span>
        </p>
        <SampleInput />
      </div>
    </Fragment>
  );
};

const SampleInput = (props) => {
  return (
    <Fragment>
      <input className='form-control' />
    </Fragment>
  );
};

export default Demo;
