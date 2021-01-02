import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import { events } from '../special/SiteContent';
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
            <Page.CardContainer content={events.training} type="events"/>
            <Page.Subtitle>Item Related</Page.Subtitle>
            <Page.CardContainer content={events.item} type="events"/>
            <Page.Subtitle>Update Related</Page.Subtitle>
            <Page.CardContainer content={events.update} type="events"/>
        </div>
    )
}

export default Events
