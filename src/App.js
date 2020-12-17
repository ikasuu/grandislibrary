import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom";
import { getInitialTheme, GlobalStyle } from './special/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import MainNavbar from './components/MainNavbar';
import ScrollToTop from './special/Hooks';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import Routes from './special/Routes';

function App() {
  //Create a theme state and setState (setTheme) function
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);
  return (
    <div id="container">
      <Helmet>
        <title>Grandis Library</title>
        <meta name="A collection of MapleStory guides, resources and information." content="description"/>
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Router>
              <ScrollToTop/>
              <MainNavbar setTheme={setTheme} theme={theme}/>
              <Suspense fallback={<div></div>}>
                <div id="main-content">
                  <Routes/>
                </div>
                <Footer/>
              </Suspense>
            </Router>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
