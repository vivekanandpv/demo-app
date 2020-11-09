import React, { Fragment } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

export default App;
