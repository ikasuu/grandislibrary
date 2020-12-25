import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, classes } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import { ClassGroupContainer } from '../components/ClassSwipe';
import * as Page from '../components/Page';

import '../css/hover.css';

/*
    Classes page for navigating into each Class Overview
    Created by: Ikasuu, Fall 2020
*/

function Classes() {
    return (
        <div>
            <Helmet>
                <title>Classes | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.verdel}.jpg`}/>
            <div>
                <Page.Title>Classes</Page.Title>
                <Page.Subtitle>Explorers</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.explorers}/>
                <Page.Subtitle>Cygnus Knights</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.cygnusKnights}/>
                <Page.Subtitle>Heroes</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.heroes}/>
                <Page.Subtitle>Resistance</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.resistance}/>
                <Page.Subtitle>Nova</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.nova}/>
                <Page.Subtitle>Sengoku</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.sengoku}/>
                <Page.Subtitle>Flora</Page.Subtitle>
                <ClassGroupContainer classGroup={classes.flora}/>
                <Page.Subtitle>Other</Page.Subtitle>
                <Page.Caption>Classes here only share Cash Shop Inventories with their own class - they do not share with each other</Page.Caption>
                <ClassGroupContainer classGroup={classes.other}/>
            </div>
        </div>
    )
}

export default Classes
