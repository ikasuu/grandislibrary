import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Container, Tab, Tabs} from 'react-bootstrap';
import styled from 'styled-components';

import { SkillContainer, VSkillContainer } from './SkillContainer';
import { commonFifth } from '../../special/Values';

/*
    Tab component in our class overviews, used to hold all the skill containers and switch between them
    Created by: Ikasuu, Fall 2020
*/

//Used to create the pre-5th job tabs
function createSkillTabs(primary){
  return primary.map((skilltree, index) => 
    <Tab eventKey={skilltree[0]} title={skilltree[0]} key={index}>
      <SkillContainer skillData={skilltree[1]}/>
    </Tab>);
}

//Retrieves the common 5th job skills defined in our Values.js and returns it as an array
function convertCommonVToArray(fifth){
  const skills = [];
  fifth.fifthCommon.forEach( it => skills.push(commonFifth[it]));
  return skills;
}

//Used for anchor tag scrolling purposes
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

// Adjusting margins for h2 and h3
const StyledHeaderTwo = styled.h2`
    margin: 2rem 0 1.5rem 0;
`;

const StyledHeaderThree = styled.h3`
    margin: 2rem 0 1.25rem 0;
`;

export function SkillTab({primary, fifth, hyper}) {
  return (
    <Container>
      <StyledHeaderTwo>Skill Information</StyledHeaderTwo>
      <Tabs>
        {createSkillTabs(primary)}
        <Tab eventKey="fifth" title="5th Job">
          <StyledHeaderThree>Common V Skills</StyledHeaderThree>
          <VSkillContainer skillData={convertCommonVToArray(fifth)}/>
          <StyledHeaderThree>Class Specific V Skills</StyledHeaderThree>
          <VSkillContainer skillData={fifth.fifthMain}/>
          <Button variant="link"><Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}><span className="jump-button"/></Link></Button>
        </Tab>
        {hyper && <Tab eventKey="hyper" title="Hyper Skills">
          <StyledHeaderThree>Passive Skills</StyledHeaderThree>
          <SkillContainer skillData={hyper.hyperPassive}/>
          <StyledHeaderThree>Active Skills</StyledHeaderThree>
          <SkillContainer skillData={hyper.hyperActive}/>
        </Tab>}
      </Tabs>
    </Container>
  );
}

export default SkillTab
