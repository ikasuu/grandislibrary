import React from 'react';
import { Image } from 'react-bootstrap';

import '../css/header-image.css';

/*
    Header image component that appears on the top of certain pages
    Created by: Ikasuu, Fall 2020
*/

function HeaderImage(props) {
    return (
        <div className="outer-box">
            <div className="header-box">
                <Image fluid className="header" src={props.imageUrl}/>
                <div className="overlay"/>
            </div>
        </div>
    );
}

export default HeaderImage
