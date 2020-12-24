import React from 'react';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, classes } from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import { ClassGroupContainer } from '../components/ClassSwipe';

import '../css/hover.css';
import '../css/page.css';

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
                <h1 className="page-title">Classes</h1>
                <h2 className="page-subtitle">Explorers</h2>
                <ClassGroupContainer classGroup={classes.explorers}/>
                <h2 className="page-subtitle">Cygnus Knights</h2>
                <ClassGroupContainer classGroup={classes.cygnusKnights}/>
                <h2 className="page-subtitle">Heroes</h2>
                <ClassGroupContainer classGroup={classes.heroes}/>
                <h2 className="page-subtitle">Resistance</h2>
                <ClassGroupContainer classGroup={classes.resistance}/>
                <h2 className="page-subtitle">Nova</h2>
                <ClassGroupContainer classGroup={classes.nova}/>
                <h2 className="page-subtitle">Sengoku</h2>
                <ClassGroupContainer classGroup={classes.sengoku}/>
                <h2 className="page-subtitle">Flora</h2>
                <ClassGroupContainer classGroup={classes.flora}/>
                <h2 className="page-subtitle">Other</h2>
                <p className="page-caption">Classes here only share Cash Shop Inventories with their own class - they do not share with each other</p>
                <ClassGroupContainer classGroup={classes.other}/>
            </div>
        </div>
    )
}

export default Classes
