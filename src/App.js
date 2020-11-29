import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import {Route, HashRouter as Router, Switch } from "react-router-dom";
import { getInitialTheme, GlobalStyle } from './special/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import MainNavbar from './components/MainNavbar';
import ScrollToTop from './special/Hooks';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
//Import all pages component here
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Content = lazy(() => import('./pages/Content'));
const Classes = lazy(() => import('./pages/Classes'));
const ClassOverview = lazy(() => import('./pages/ClassOverview'));
const Events = lazy(() => import('./pages/Events'));
const Resources = lazy(() => import('./pages/Resources'));
const DamageSkin = lazy(() => import('./pages/DamageSkin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  //Create a theme state and setState (setTheme) function
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);
  return (
    <div>
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
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/content" component={Content}/>
                  <Route path="/classes/:id" component={ClassOverview}/>
                  <Route path="/classes" component={Classes}/>
                  <Route path="/events" component={Events}/>
                  <Route path="/resources" component={Resources}/>
                  <Route path="/damage-skin" component={DamageSkin}/>
                  <Route component={NotFound}/>
                </Switch>
              </Suspense>
            </Router>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
