import React from 'react';
import HomePage from './components/HomePage/HomePage';
import FeaturesPage from './components/FeaturesPage/FeaturesPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <div>
      <HomePage/>
      <FeaturesPage/>
      <GalleryPage />
      <AboutPage/>
    </div>
  );
}

export default App;
