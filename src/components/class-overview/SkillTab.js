import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Container, Tab, Tabs} from 'react-bootstrap';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
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

//Used for scrolling purposes
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


export function SkillTab({primary, fifth, hyper, hyperSkillBuild, nodeInfo}) {
  return (
    <Container>
      <h2>Skill Information</h2>
      <Tabs>
        {createSkillTabs(primary)}
        <Tab eventKey="fifth" title="5th Job">
          <h4>Recommended Skills for Boost Nodes</h4>
          <Container>{parse(DOMPurify.sanitize(nodeInfo.recommended))}</Container>
          <ul>
          </ul>
          <h4>All Possible Skills Obtainable for Boost Nodes</h4>
          <Container>{parse(DOMPurify.sanitize(nodeInfo.possible))}</Container>
          <h3>Common V Skills</h3>
          <VSkillContainer skillData={convertCommonVToArray(fifth)}/>
          <h3>Class Specific V Skills</h3>
          <VSkillContainer skillData={fifth.fifthMain}/>
          <Button variant="link"><Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}><span className="jump-button"/></Link></Button>
        </Tab>
        {hyper && <Tab eventKey="hyper" title="Hyper Skills">
          <h3>Passive Build</h3>
          {parse(DOMPurify.sanitize(hyperSkillBuild.recommended))}
          <h3>Passive Skills</h3>
          <SkillContainer skillData={hyper.hyperPassive}/>
          <h3>Active Skills</h3>
          <SkillContainer skillData={hyper.hyperActive}/>
        </Tab>}
      </Tabs>
    </Container>
  );
}

export default SkillTab
