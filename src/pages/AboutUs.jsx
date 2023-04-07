import React from 'react'
import { Navbar, HeroTwo, WhoWeAre, WhoWeAreTwo, Team, Partners, Footer, BackToTop } from '../components';
import { aboutUs, whoWeAre, whoWeAreTwo, team, teamText, partners, partnersText } from '../constants';

const AboutUs = () => {
  const heroTwoData = aboutUs;
  const teamData = team;
  const teamTextData = teamText;
  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <WhoWeAre whoWeAre={whoWeAre} />
      <WhoWeAreTwo whoWeAreTwo={whoWeAreTwo} />
      <Team teamData={teamData} teamTextData={teamTextData} />
      <Partners partners={partners} partnersText={partnersText}/>
      <Footer />
      <BackToTop />
    </div>
    </>
  )
}

export default AboutUs