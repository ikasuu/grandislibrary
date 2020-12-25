import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, events } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import * as Page from '../components/Page';

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
            <Page.Title>Events</Page.Title>
            <Page.Subtitle>Training Related</Page.Subtitle>
            <Page.CardContainer content={events.training}/>
            <Page.Subtitle>Item Related</Page.Subtitle>
            <Page.CardContainer content={events.item}/>
            <Page.Subtitle>Update Related</Page.Subtitle>
            <Page.CardContainer content={events.update}/>
        </div>
    )
}

export default Events
