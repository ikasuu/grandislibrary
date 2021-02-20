import React, { useState, useEffect, Suspense } from 'react';
import {HashRouter as Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import { Helmet } from 'react-helmet';

import { getInitialTheme, GlobalStyle } from './special/GlobalTheme';
import MainNavbar from './components/MainNavbar';
import ScrollToTop from './special/Hooks';
import Footer from './components/Footer';
import Routes from './special/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  //Create a theme state and setState (setTheme) function
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);

  // Google Analytics setup
  const history = createBrowserHistory();

  useEffect(() => {
    ReactGA.initialize('UA-120385111-3');
    ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
  }, []);

  history.listen( (location) => {
    ReactGA.pageview(window.location.pathname + location.location.hash + location.location.search);
  })

  return (
    <div id="container">
      <Helmet>
        <title>Grandis Library</title>
        <meta content="A collection of MapleStory guides, resources and information." name="description"/>
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Router history={history}>
              <ScrollToTop/>
              <MainNavbar setTheme={setTheme} theme={theme}/>
              <div id="main-content"><Suspense fallback={<div></div>}><Routes/></Suspense></div>
            </Router>
            <Footer/>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
