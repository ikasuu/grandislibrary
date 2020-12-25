import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import * as Page from '../components/Page';

/*
    Resources page
    Created by: Ikasuu, Fall 2020
*/

function Resources() {
    return (
        <div>
            <Helmet>
                <title>Resources | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.grandis}.jpg`}/>
            <Page.Title>Resources</Page.Title>
        </div>
    )
}

export default Resources
