import React from 'react'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { Col, Container, Image, Table, Row} from 'react-bootstrap';
import LinkSkill from './LinkSkill';
import NotableSkill from './NotableSkill';
import '../../css/class-overview.css';
import { weapons, secondaryWeapons, weaponConsumable } from '../../special/Values';

/*
    Renders the upper components of the class overview (Class Properties, Notable Skills + Class Type, and Pros and Cons)
    Created by: Ikasuu, Fall 2020
*/

export function ClassIntro({data}) {
    return (
        <Container>
        <h1 className="class-title">{data.class}</h1>
        <Row>
          <Col md="auto" className="property-container">
            <ClassProperties content={data.content}/>
            <PropertyBox skills={data.skill.notable} classType={data.content.classType}/>
          </Col>
          <Col md="auto" className="pros-cons-container">
            <ClassProsCons pros={data.content.prosCons.pros} cons={data.content.prosCons.cons}/>
            <LinkSkill linkSkill={data.content.linkSkill}/>
          </Col>
        </Row>
      </Container>
    )
}

/*
    Properties component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassProperties({content}) {
  return (
      <div>
          <h2>Class Properties</h2>
          <Container>
          <Table borderless>
              <tbody>
              <tr>
                  <th><strong>Class Group</strong></th>
                  <td>{content.classGroup}</td>
              </tr>
              <tr>
                  <th><strong>Primary Stat</strong></th>
                  <td>{content.mainStat}</td>
              </tr>
              <tr>
                  <th><strong>Secondary Stat</strong></th>
                  <td>{content.secondaryStat}</td>
              </tr>
              <tr>
                  <th><strong>Legion Bonus</strong></th>
                  <td>{content.legion}</td>
              </tr>
              <tr>
                  <th><strong>Primary Weapon</strong></th>
                  <td>
                      {content.equipment[0].weapon.map(it => <Row key={it} style={{marginBottom: '0.2rem'}}><Col><Image src={weapons[it][0]} style={{verticalAlign: 'middle'}}/> {weapons[it][1]}</Col></Row>)}
                  </td>
              </tr>
              <tr>
                  <th><strong>Secondary Weapon</strong></th>
                  <td>
                      {content.equipment[1].secondary.map(it => <Row key={it} style={{marginBottom: '0.2rem'}}><Col><Image src={secondaryWeapons[it][0]} style={{verticalAlign: 'middle'}}/> {secondaryWeapons[it][1]}</Col></Row>)}
                  </td>
              </tr>
              {
                  content.equipment[2] &&
                  <tr>
                      <th><strong>Ammo</strong></th>
                      <td><div><Image src={weaponConsumable[content.equipment[2].ammo][0]} style={{verticalAlign: 'middle'}}/> {weaponConsumable[content.equipment[2].ammo][1]}</div></td>
                  </tr>
              }
              </tbody>
          </Table>
          </Container>
      </div>
  );
}

/*
    Box component to accompany the Property table in class overviews
    Created by: Ikasuu, Fall 2020
*/

function PropertyBox({skills, classType}) {
  return (
      <div style={{paddingLeft: '0.5rem'}}>
          <h5>Notable Skills</h5>
          { skills.map( skill => 
              <NotableSkill key={skill.name} skill={skill}/>
          )}
          <h5>Class Type</h5>
          <ul>
              {classType.map(it => <li key={it}>{it}</li>)}
          </ul>
      </div>
  );
}

/*
    Pros and Cons component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassProsCons({pros, cons}) {
  return (
      <div>
          <h2>Pros and Cons</h2>
          <Container>
              <h3>Pros</h3>
              <ul>
                  {pros.map( pro => <li key={pro}>{parse(DOMPurify.sanitize(pro))}</li>)}
              </ul>
              <h3>Cons</h3>
              <ul>
                  {cons.map( con => <li key={con}>{parse(DOMPurify.sanitize(con))}</li>)}
              </ul>
          </Container>
      </div>
  );
}

export default ClassIntro
