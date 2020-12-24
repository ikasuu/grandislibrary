import React from 'react';

import HeaderImageUrl from '../special/Values';
import GridItem from '../components/GridItem';

import '../css/grid-item.css';

/*
    Container for our image links on the homepage
    Created by: Ikasuu, Fall 2020
*/

function GridContainer() {
    return (
        <div className="grid-flex-container">
            <GridItem text="Content" linkTo="/content" imageUrl={`${HeaderImageUrl.ristonia}.png`}/>
            <GridItem text="Classes" linkTo="/classes" imageUrl={`${HeaderImageUrl.verdel}.png`}/>
            <GridItem text="Events" linkTo="/events" imageUrl={`${HeaderImageUrl.fox}.png`}/>
            <GridItem text="Resources" linkTo="/resources" imageUrl={`${HeaderImageUrl.grandis}.png`}/>
        </div>
    );
}

export default GridContainer
