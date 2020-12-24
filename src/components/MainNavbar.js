import React, { useState } from 'react';
import logo from '../logo.webp';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import DropdownNav from './DropdownNav';

import '../css/hover.css';
import '../css/main-nav.css';

/*
    Main navbar component for our site
    Created by: Ikasuu, Fall 2020
*/

//Check if homepage for NavLink use, else we will always have an underline under 'Home'
const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
}

function MainNavbar(props) {
    const [expanded, setExpanded] = useState(false);
    const setTheme = props.setTheme;
    const theme = props.theme;
    
    return (
        <div>
          <Navbar fixed="top" collapseOnSelect expand="lg" expanded={expanded}>
            <Navbar.Brand>
              <Link className="site-title nav-props" to="/">
                <img
                  src={logo}
                  width="42"
                  height="42"
                  className="d-inline-block align-text-top"
                  alt="Grandis Library logo"
                />{' '}
                Grandis Library
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="mr-auto"/>
              <Nav>
                <Button variant="link" className="hvr-buzz-out"><a href="https://www.grandislibrary.com/" target='_blank' rel="noopener noreferrer"><span className="discord-button"/></a></Button>
                <DropdownNav setExpanded={setExpanded}/>
                <NavLink className="nav-link-button nav-props" activeClassName="underline" to="/about" onClick={() => setExpanded(false)}>About</NavLink>
                <NavLink className="nav-link-button nav-props" activeClassName="underline" isActive={checkActive} to="/" onClick={() => setExpanded(false)}>Home</NavLink>
              </Nav>
              <Button variant="link" onClick={e=>
                    setTheme(
                      theme.mode === 'dark'
                        ? {...theme, mode: 'light'}
                        : {...theme, mode: 'dark'}) }>
                  <span className="toggle-mode"/>
              </Button>
              </Navbar.Collapse>
          </Navbar>
        </div>
    );
}

export default MainNavbar
