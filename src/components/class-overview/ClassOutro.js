import React from 'react'
import '../../css/class-overview.css';

/*
This file contains the outro contents (after the skills overview) of a Class Overview
In this file you will find:
-ClassOutro - contains the more info and credits
-ClassMoreInfo - renders the links in more info
-ClassCredits - renders the credits
*/

export function ClassOutro({className, moreInfo, credits}) {
    return (
        <div>
            <ClassMoreInfo className={className} moreInfo={moreInfo}/>
            <ClassCredit credits={credits}/>
        </div>
    )
}

/*
    Rendering the links found in more info component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassMoreInfo({className, moreInfo}) {
    return (
        <div>
            <h5>For more information about {className} check out:</h5>
            {moreInfo.map(link => <div className="more-info-link" key={link}><a href={link} target='_blank' rel="noopener noreferrer">{link}</a></div>)}
        </div>
    )
}

/*
    Rendering credits component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassCredit({credits}) {
    return (
        <div>
            <h3>Credits</h3>
            {credits.map(credit => <div className="credit" key={credit}><strong>{credit[0]}</strong>: {credit[1]}</div>)}
        </div>
    );
}


export default ClassOutro
