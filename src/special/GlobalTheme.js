import { createGlobalStyle } from 'styled-components';
import style from 'styled-theming';
import storage from 'local-storage-fallback';

/*
    File used to provide global styling to site, used mainly to provide support for dark mode
    Created by: Ikasuu, Fall 2020
*/

//Used for dark mode functionality, gets the correct string based on light or dark mode
const getBackground = style('mode', {
    light: '#EEE',
    dark: '#2a2829'
  });
  
const getForeground = style('mode', {
    light: '#2a2829',
    dark: '#EEE'
  });
  
const getMenuColor = style('mode',{
    light: 'black',
    dark: 'white'
  });
  
const getMenuToggle = style('mode', {
    light: 'off',
    dark: 'on'
  });
  
//Global style that is applied to all pages of site
//Any changes caused by dark mode should go below
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeground};
    // transition: all 0.5s ease-out;
  }

  tr, th{
    color: ${getForeground} !important;
  }

  hr{
    border-top: ${props => props.theme.mode === 'dark' ? '1px solid rgb(255, 255, 255,0.5)' : '1px solid rgba(0,0,0,0.5);'};
  }

  .site-title{
    color: ${getForeground} !important;
  }
  
  //Toggle button for dark mode
  .toggle-mode{
    background: url("${process.env.PUBLIC_URL}/icons/nights_stay-${getMenuToggle}-${getMenuColor}-18dp.svg");
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    display:block;
  }

  //Navbar discord button
  .discord-button{
    background: url("${process.env.PUBLIC_URL}/icons/discord-logo-${getMenuColor}.svg");
    margin-top: -0.2rem;
    margin-left: -0.2rem;
    background-size: 6rem 2rem;
    height: 1.7rem;
    width: 5.7rem;
    display:block;
  }
  
  //Navbar links such as 'Home' and 'About'
  .nav-link-button{
    color: ${getForeground} !important;
  }

  .navbar{
    background-color: ${getBackground};
  }
  
  //Hamburger icon
  .navbar-toggler-icon{
    background-image: url("${process.env.PUBLIC_URL}/icons/menu-${getMenuColor}-18dp.svg") !important;
    background-size: 2.5rem 2.5rem;
    margin-top: 0.6rem;
  }

  //For the dropdown button in the navbar
  .dropdown-toggle{
    color: ${getForeground} !important;
  }

  //The dropdown menu itself, not the button
  .dropdown-menu{
    background-color: ${getBackground};
  }

  //The i button styling in InfoButton.js
  .info-button{
    background: url("${process.env.PUBLIC_URL}/icons/info-${getMenuColor}-18dp.svg");
    background-size: 1.3rem 1.3rem;
    height: 1.3rem;
    width: 1.3rem;
    display: block;
  }

//Bootstrap components
  .card{
    background-color: ${props => props.theme.mode === 'dark' ? '#37363a' : '#FFF'};
    margin: 1rem;
  }

  //Cards related
  .text-muted{
    color: ${props => props.theme.mode === 'dark' ? '#a2afba !important' : '#6c757d !important'};
  }

  //Tabs related
  .nav-tabs{
    border-color: ${props => props.theme.mode === 'dark' ? '#242020 !important' : ''};
  }

  //Tabs related
  .nav-link{
    border: none !important;
  }

  //Tabs related
  .nav-link.active{
    color: ${props => props.theme.mode === 'dark' ? '#FFF' : '#37363a'} !important;
    background-color: ${props => props.theme.mode === 'dark' ? '#37363a' : '#FFF'} !important;
    border-color: ${props => props.theme.mode === 'dark' ? '#242020 !important' : ''};
    box-shadow: 0 0.1rem 0.1rem 0 rgba(0,0,0,0.2),0 0.2rem 0.2rem 0 rgba(0,0,0,0.19) !important;
  }

  //Modals related
  .modal-content{
    background-color: ${getBackground} !important;
  }

  //Modals related
  .modal-header{
    border-color: ${props => props.theme.mode === 'dark' ? '#37363a !important' : ''} ;
  }

  //Modals related
  .close{
    color: ${getForeground} !important;
    opacity: 1 !important;
  }

  `;
  
//Get user's preferred site theme, if none, default is 'dark'
export  function getInitialTheme(){
    const savedTheme = storage.getItem('theme');
    return savedTheme ?  JSON.parse(savedTheme) : {mode: 'dark'};
  }