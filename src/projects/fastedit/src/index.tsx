import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import FeaturesPage from './components/FeaturesPage/FeaturesPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import AboutPage from './components/AboutPage/AboutPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <div>
            <HomePage />
            <FeaturesPage />
            <GalleryPage />
            <AboutPage />
        </div>
  </React.StrictMode>
);