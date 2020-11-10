import React, { Fragment } from 'react';
import Banner from './components/Banner';
import Demo from './components/Demo';
import Footer from './components/Footer';
import FormikForm from './components/FormikForm';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <Banner /> */}
      {/* <MainContent /> */}
      {/* <RegistrationForm /> */}
      {/* <Demo /> */}
      <FormikForm />
      <Footer />
    </Fragment>
  );
}

export default App;
