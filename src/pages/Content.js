import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, content } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import * as Page from '../components/Page';

/*
    Content page
    Created by: Ikasuu, Fall 2020
*/

function Content() {
    return (
        <div>
            <Helmet>
                <title>Content | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.ristonia}.jpg`}/>
            <Page.Title>Content</Page.Title>
            <Page.Subtitle>Gameplay Related</Page.Subtitle>
            <Page.CardContainer content={content.gameplay}/>
            <Page.Subtitle>Class Related</Page.Subtitle>
            <Page.CardContainer content={content.class}/>
            <Page.Subtitle>Equipment Related</Page.Subtitle>
            <Page.CardContainer content={content.equipment}/>
        </div>
    )
}

export default Content
