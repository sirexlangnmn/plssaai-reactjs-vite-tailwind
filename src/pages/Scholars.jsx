import React from 'react'
import { Navbar, HeroTwo, Footer, BackToTop } from '../components';
import { scholarsText, blogsAndNews } from '../constants';

const Scholars = () => {
  const heroTwoData = scholarsText;

  return (
    <>
     <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      {/* <WhoWeAre whoWeAre={whoWeAre} />
      <WhoWeAreTwo whoWeAreTwo={whoWeAreTwo} />
      <Team team={team} teamText={teamText} />
      <Partners partners={partners} partnersText={partnersText}/>*/}
      <Footer />
      <BackToTop /> 
    </div>
    </>
  )
}

export default Scholars