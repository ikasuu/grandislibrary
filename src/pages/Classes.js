import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, classes } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import { ClassGroupContainer } from '../components/ClassSwipers';
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
            <HeaderImage imageUrl={HeaderImageUrl.verdel}/>
            <div>
                <Page.Title>Classes</Page.Title>
                <Page.Subtitle>Explorers</Page.Subtitle>
                <ClassGroupContainer classes={classes.explorers} classGroup="explorers"/>
                <Page.Subtitle>Cygnus Knights</Page.Subtitle>
                <ClassGroupContainer classes={classes.cygnusKnights} classGroup="cygnus-knights"/>
                <Page.Subtitle>Heroes</Page.Subtitle>
                <ClassGroupContainer classes={classes.heroes} classGroup="heroes"/>
                <Page.Subtitle>Resistance</Page.Subtitle>
                <ClassGroupContainer classes={classes.resistance} classGroup="resistance"/>
                <Page.Subtitle>Nova</Page.Subtitle>
                <ClassGroupContainer classes={classes.nova} classGroup="nova"/>
                <Page.Subtitle>Sengoku</Page.Subtitle>
                <ClassGroupContainer classes={classes.sengoku} classGroup="sengoku"/>
                <Page.Subtitle>Flora</Page.Subtitle>
                <ClassGroupContainer classes={classes.flora} classGroup="flora"/>
                <Page.Subtitle>Anima</Page.Subtitle>
                <ClassGroupContainer classes={classes.anima} classGroup="anima"/>
                <Page.Subtitle>Jianghu</Page.Subtitle>
                <ClassGroupContainer classes={classes.jianghu} classGroup="jianghu"/>
                <Page.Subtitle>Shine</Page.Subtitle>
                <ClassGroupContainer classes={classes.shine} classGroup="shine"/>
                <Page.Subtitle>Other</Page.Subtitle>
                <Page.Caption>Classes here only share Cash Shop Inventories with their own class - they do not share with each other</Page.Caption>
                <ClassGroupContainer classes={classes.other} classGroup="other"/>
            </div>
        </div>
    );
}

export default Classes;
