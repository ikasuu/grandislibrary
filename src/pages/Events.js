import React from 'react';
import { Helmet } from 'react-helmet';

import CardContainer from '../components/CardContainer';
import { HeaderImageUrl, events } from '../special/Values';
import HeaderImage from '../components/HeaderImage';

// Import CSS
import '../css/page.css';

/*
    Events page
    Created by: Ikasuu, Fall 2020
*/

function Events() {
    return (
        <div>
            <Helmet>
                <title>Events | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.fox}.jpg`}/>
            <h1 className="page-title">Events</h1>
            <h2 className="page-subtitle">Training Related</h2>
            <CardContainer content={events.training}/>
            <h2 className="page-subtitle">Item Related</h2>
            <CardContainer content={events.item}/>
            <h2 className="page-subtitle">Update Related</h2>
            <CardContainer content={events.update}/>
        </div>
    )
}

export default Events
