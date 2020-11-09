import React, { Fragment } from 'react';

const Footer = (props) => {
  return (
    <Fragment>
      <footer className='text-muted'>
        <div className='container'>
          <p className='float-right'>
            <a href='#'>Back to top</a>
          </p>
          <p>
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p>
            New to Bootstrap?{' '}
            <a href='https://getbootstrap.com/'>Visit the homepage</a> or read
            our{' '}
            <a href='/docs/4.5/getting-started/introduction/'>
              getting started guide
            </a>
            .
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
