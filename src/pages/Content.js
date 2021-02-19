import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import { content } from '../special/SiteContent';
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
            <HeaderImage imageUrl={HeaderImageUrl.ristonia}/>
            <Page.Title>Content</Page.Title>
            <Page.Subtitle>Gameplay Related</Page.Subtitle>
            <Page.CardContainer content={content.gameplay} type="content"/>
            <Page.Subtitle>Class Related</Page.Subtitle>
            <Page.CardContainer content={content.class} type="content"/>
            <Page.Subtitle>Equipment Related</Page.Subtitle>
            <Page.CardContainer content={content.equipment} type="content"/>
        </div>
    );
}

export default Content;
