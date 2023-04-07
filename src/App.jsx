import React from 'react';
import { Routes, Route } from 'react-router-dom'


import { AboutUs, Home, BlogsAndNews, Scholars } from './pages';
import { navLinks } from './constants';

const App = () => {
  return (
   <>
    <Routes>
      <Route path={navLinks[0].link} element={<Home />} />
      <Route path={navLinks[1].link} element={<AboutUs />}/>
      <Route path={navLinks[2].link} element={<BlogsAndNews />}/>
      <Route path={navLinks[3].link} element={<Scholars />}/>
    </Routes>
   </>
  )
}

export default App;