import React from 'react';
import { Navbar, Hero, AboutSummary, AdmissionAds, NewsSummary, Affiliations, Footer, BackToTop } from '../components';


const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <AboutSummary />
      <AdmissionAds />
      <NewsSummary />
      <Affiliations />
      <Footer />
      <BackToTop />
    </div>
    </>
  )
}

export default Home;
