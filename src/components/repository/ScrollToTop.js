import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';

/*
    Repsonsible for creating Fab button that pops up quick jump menu
    Created by: Ikasuu, Spring 2021
*/

function ScrollToTop() {
    return (
        <Link smooth to="#" scroll={el => scrollWidthOffset(el)}><ScrollFab/></Link>
    );
}

//Used to scroll to anchor tags
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// Function to trigger fab to appear when scrolling
function ScrollTop(props){
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return(
        <Zoom in={trigger}>
            {children}
        </Zoom>
    );
}

// Function for quick jump menu, handles logic
function ScrollFab(){
    return(
        <ScrollTop>
                <Fab color="primary" size="medium" style={{position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: '1000'}}>
                    <span className="scroll-top-button"/>
                </Fab>
        </ScrollTop>
    );
}

export default ScrollToTop;