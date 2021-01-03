import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import Zoom from '@material-ui/core/Zoom';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

/*
    Repsonsible for creating Fab button that pops up quick jump menu
    Created by: Ikasuu, Spring 2021
*/

function ScrollToTop() {
    return (
        <div>
            <Fab color="primary" size="medium" style={{position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: '1000'}}>
                <MenuBar/>
            </Fab>
        </div>
    )
}

export default ScrollToTop


//Used to scroll to anchor tags
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// Styling for each link
const MenuLink = styled(Link)`
    color: black !important;
    width: 100%;
`;

// Function to trigger fab to appear when scrolling
// function ScrollTop(props){
//     const {children} = props;
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 100,
//     });

//     return(
//         <Zoom in={trigger}>
//             {children}
//         </Zoom>
//     );
// }

// Function for quick jump menu, handles logic
function MenuBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <span onClick={handleMenu} className="jump-button"/>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 110,
                    horizontal: 165,
                }}
                open={open}
                onClose={handleClose}
                disableScrollLock
            >
                <div className="arrow" style={{position: "absolute", top: "0px", transform: "translate(0px, 8px)"}}/>
                <h6 style={{textAlign: 'center'}}>Quick Jump</h6>
                <Divider variant="middle" />
                <MenuItem onClick={handleClose}><MenuLink smooth to="#property" scroll={el => scrollWidthOffset(el)}>Class Properties</MenuLink></MenuItem>
                <MenuItem onClick={handleClose}><MenuLink smooth to="#stat" scroll={el => scrollWidthOffset(el)}>Base Stats</MenuLink></MenuItem>
                <MenuItem onClick={handleClose}><MenuLink smooth to="#skill" scroll={el => scrollWidthOffset(el)}>Skill Info</MenuLink></MenuItem>
            </Menu>
        </div>
    )
}