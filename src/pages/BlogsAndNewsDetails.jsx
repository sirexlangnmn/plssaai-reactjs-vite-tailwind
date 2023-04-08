import React from 'react';
import { useParams } from 'react-router-dom'
import { Navbar, DisplayDetailsOne, HeroTwo, CardBlogs, Footer, BackToTop, Switcher } from '../components';
import { blogsText, blogsAndNews } from '../constants';

const BlogsAndNewsDetails = () => {
  const { postId } = useParams();
  const heroTwoData = blogsText;

  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <DisplayDetailsOne id={postId} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default BlogsAndNewsDetails