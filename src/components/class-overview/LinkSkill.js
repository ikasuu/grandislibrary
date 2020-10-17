import React from 'react';
import SingleSkill from './SingleSkill';

/*
    Component to hold link skill
    Created by: Ikasuu, Fall 2020
*/

function LinkSkill({linkSkill}) {
    return (
        <div>
            <h2>Link Skill</h2>
            <SingleSkill skillData={linkSkill}/> 
        </div>
    );
}

export default LinkSkill
