import React, { Fragment } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <Banner /> */}
      {/* <MainContent /> */}
      <RegistrationForm />
      <Footer />
    </Fragment>
  );
}

export default App;
