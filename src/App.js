import React, { useEffect } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

import Aos from 'aos';
import 'aos/dist/aos.css'

import './App.css';

const App = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return(
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

  </div>
  )};

export default App;
