import React from 'react'
import { Navbar, HeroTwo, Footer, BackToTop, Switcher } from '../components';
import { scholarsText } from '../constants';

const Scholars = () => {
  const heroTwoData = scholarsText;

  return (
    <>
     <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default Scholars