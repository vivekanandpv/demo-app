import React, { Fragment } from 'react';

const Banner = (props) => {
  return (
    <Fragment>
      <section className='jumbotron text-center'>
        <div className='container'>
          <h1>Album example</h1>
          <p className='lead text-muted'>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href='#' className='btn btn-primary my-2 mx-1'>
              Main call to action
            </a>
            <a href='#' className='btn btn-secondary my-2 mx-1'>
              Secondary action
            </a>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;
