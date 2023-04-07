import React from 'react'
import { Navbar, HeroTwo, WhoWeAre, WhoWeAreTwo, Team, Partners, Footer, BackToTop } from '../components';
import { aboutUs, whoWeAre, whoWeAreTwo, team, teamText, partners, partnersText } from '../constants';

const AboutUs = () => {
  return (
    <>
    <div>
      <Navbar />
      <HeroTwo aboutUs={aboutUs} />
      <WhoWeAre whoWeAre={whoWeAre} />
      <WhoWeAreTwo whoWeAreTwo={whoWeAreTwo} />
      <Team team={team} teamText={teamText} />
      <Partners partners={partners} partnersText={partnersText}/>
      <Footer />
      <BackToTop />
    </div>
    </>
  )
}

export default AboutUs