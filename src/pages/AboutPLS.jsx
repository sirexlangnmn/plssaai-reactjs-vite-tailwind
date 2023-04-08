import React from 'react';
import { useParams } from 'react-router-dom'
import { Navbar, HeroTwo, DisplayDetailsTwo, Footer, BackToTop, Switcher } from '../components';
import { aboutPLS, blogsText } from '../constants';
const AboutPLS = () => {
  const { id } = useParams();
  const heroTwoData = blogsText;

  console.log('AboutPLS id:', id);
  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <DisplayDetailsTwo id={id} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default AboutPLS