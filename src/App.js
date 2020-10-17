import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, HashRouter as Router, Switch } from "react-router-dom";
import { getInitialTheme, GlobalStyle } from './special/GlobalTheme';
import { ThemeProvider } from 'styled-components';
import storage from 'local-storage-fallback';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
//Import all pages component here
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import Classes from "./pages/Classes";
import ClassOverview from './pages/ClassOverview';
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

function App() {
  //Create a theme state and setState (setTheme) function
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme));
  },[theme]);
  return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Router>
              <MainNavbar setTheme={setTheme} theme={theme}/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/content" component={Content}/>
                <Route path="/classes/:id" component={ClassOverview}/>
                <Route path="/classes" component={Classes}/>
                <Route path="/events" component={Events}/>
                <Route path="/resources" component={Resources}/>
                <Route component={NotFound}/>
              </Switch>
            </Router>
        </>
      </ThemeProvider>
  );
}

export default App;
