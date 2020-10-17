import React from 'react';
import SkillInfo from './SkillInfo'

/*
    Skill container that will hold all our skills. Additionally makes the API calls to retrieve data
    Created by: Ikasuu, Fall 2020
*/

function VSkillContainer({skillData}) {
    return (
        <div>
            {
                skillData.map( skill => 
                    <div key={skill.id}>
                        <SkillInfo 
                            skillData={skill}
                            name={skill.name}
                            properties={{}}
                            shortDesc={skill.shortDesc}
                            maxLevel={"25 + 5"}/>
                    </div>)
            }
        </div>
    );
}

export default VSkillContainer

