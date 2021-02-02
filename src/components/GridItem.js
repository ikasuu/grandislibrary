import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

/*
    Individual grid item component for our homepage. To be used with our GridContainer.js
    Created by: Ikasuu, Fall 2020
*/

function GridItem(props) {
    return (
        <div className="grid-wrapper">
            <Link to={props.linkTo}>
                <Image className="grid-image" src={props.imageUrl}/>
                <div className="grid-overlay"/>
                <div className="grid-text">
                    <h3 className="grid-title">{props.text}</h3>
                </div>
            </Link>
        </div>
    )
}

export default GridItem;
