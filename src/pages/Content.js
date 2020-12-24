import React from 'react';
import { Helmet } from 'react-helmet';

import CardContainer from '../components/CardContainer';
import { HeaderImageUrl, content } from '../special/Values';
import HeaderImage from '../components/HeaderImage';

// Import CSS
import '../css/page.css';

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
            <h1 className="page-title">Content</h1>
            <h2 className="page-subtitle">Gameplay Related</h2>
            <CardContainer content={content.gameplay}/>
            <h2 className="page-subtitle">Class Related</h2>
            <CardContainer content={content.class}/>
            <h2 className="page-subtitle">Equipment Related</h2>
            <CardContainer content={content.equipment}/>
        </div>
    )
}

export default Content
