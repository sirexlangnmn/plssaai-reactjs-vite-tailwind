import React from 'react';
import { Routes, Route } from 'react-router-dom'


import { AboutUs, Home, AboutPLS, BlogsAndNews, BlogsAndNewsDetails, Scholars } from './pages';
import { navLinks2 } from './constants';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={navLinks2[0].link} element={<Home />} />
        <Route path={navLinks2[1].link} element={<AboutUs />} />
        <Route path={navLinks2[2].link} element={<BlogsAndNews />} />
        <Route path={navLinks2[3].link} element={<Scholars />} />
        <Route path={navLinks2[4].link} element={<BlogsAndNewsDetails />} />
        <Route path={navLinks2[5].link} element={<AboutPLS />} />
      </Routes>
    </>
  )
}

export default App;