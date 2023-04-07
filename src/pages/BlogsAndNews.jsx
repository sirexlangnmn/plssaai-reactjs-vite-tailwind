import React from 'react'
import { Navbar, HeroTwo, Card, Footer, BackToTop } from '../components';
import { blogsText, blogsAndNews } from '../constants';

const BlogsAndNews = () => {
  const heroTwoData = blogsText;
  const cardData = blogsAndNews;
  return (
    <>
     <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <Card cardData={cardData} />
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

export default BlogsAndNews