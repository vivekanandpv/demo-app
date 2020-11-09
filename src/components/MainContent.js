import React, { Fragment } from 'react';
import Card from './Card';

const MainContent = (props) => {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => {
    return (
      <div className='col-md-4' key={i}>
        <Card name='Turing' />
      </div>
    );
  });

  return (
    <Fragment>
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row'>{cards}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainContent;
