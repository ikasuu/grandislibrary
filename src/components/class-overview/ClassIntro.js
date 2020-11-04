import React from 'react'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { Col, Container, Image, Table, Row, Card} from 'react-bootstrap';
import { LinkSkill, NotableSkill } from './SingleSkill';
import InfoButton from '../InfoButton';
import '../../css/class-overview.css';
import { weapons, secondaryWeapons, weaponConsumable } from '../../special/Values';

/*
This file contains the intro contents of a Class Overview
In this file you will find:
-ClassIntro - Holds ClassProperties, PropertyBox, and ClassProsCons
-ClassProperties
-PropertyBox - This is the section below ClassProperties that has notable skills and class type
-ClassProsCons
-ClassDetail - Holds the base stats, buffs, build path rendering
-ClassCreation - For classes that have a "How to Create" section
-ClassExtraContent - Any extra content like explanation of Dark Sight is rendered here
*/


/*
    Renders the upper components of the class overview (Class Properties, Notable Skills + Class Type, and Pros and Cons)
    Created by: Ikasuu, Fall 2020
*/

export function ClassIntro({data}) {
    return (
        <div>
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
            <hr/>
            <ClassDetail content={data.content}/>
        </div>
    )
}

/*
    Properties component in our class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassProperties({content}) {
  return (
      <div className="class-property">
          <h2>Class Properties</h2>
          <Container>
          <Table borderless>
              <tbody>
              <tr>
                  <th><strong>Class Group</strong></th>
                  <td>{content.classGroup}</td>
              </tr>
              <tr>
                  <th><strong>Job Group</strong></th>
                  <td>{content.jobGroup}</td>
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
          {/* <Card>
            <Card.Body>
              <Row noGutters>
                <Col xs="4">
                  <strong>Damage</strong>
                </Col>
                <Col >
                  <div><Image src={`${process.env.PUBLIC_URL}/class-scale/damage-${classType.damage}.png`} width="150"/></div>
                </Col>
              </Row>
              <Row noGutters>
                  <Col xs="4">
                    <strong>Defense</strong>
                  </Col>
                  <Col >
                    <div><Image src={`${process.env.PUBLIC_URL}/class-scale/defense-${classType.defense}.png`} width="150"/></div>
                  </Col>
              </Row>
              <Row noGutters>
                  <Col xs="4">
                    <strong>Mobility</strong>
                  </Col>
                  <Col >
                    <div><Image src={`${process.env.PUBLIC_URL}/class-scale/mobility-${classType.mobility}.png`} width="150"/></div>
                  </Col>
              </Row>
              <Row noGutters>
                  <Col xs="4">
                    <strong>Difficulty</strong>
                  </Col>
                  <Col >
                    <div><Image src={`${process.env.PUBLIC_URL}/class-scale/difficulty-${classType.difficulty}.png`} width="150"/></div>
                  </Col>
              </Row>
              <Row noGutters>
                  <Col xs="4">
                    <strong>Popularity</strong>
                  </Col>
                  <Col >
                    <div><Image src={`${process.env.PUBLIC_URL}/class-scale/popularity-${classType.popularity}.png`} width="150"/></div>
                  </Col>
              </Row>
            </Card.Body>
          </Card> */}
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
      <div className="pros-cons-container">
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

/*
    Rendering base stats and buffs + actives in class overviews
    Created by: Ikasuu, Fall 2020
*/

function ClassDetail({content}) {
    return (
        <Container>
          <Row>
            <Col md="auto" className="base-stats-width">
              <h2 className="base-stat-title">Base Stats (From Skills)<InfoButton tooltip={parse(DOMPurify.sanitize(content.baseStats[0]))}/></h2>
              <Table borderless>
                <tbody>
                    {content.baseStats[1].map((stat, index) => <tr key={index}><td className="stat-td">{parse(DOMPurify.sanitize(stat))}</td></tr>)}
                </tbody>
              </Table>
            </Col>
            <Col md="auto" className="buff-width">
              <h2>Buffs &amp; Other Actives</h2>
              <Table size="sm" borderless>
                <tbody>
                  <tr>
                    <th><strong>Active Buffs</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.active))}</td>
                  </tr>
                  {content.buffInfo.summons ? <tr><th><strong>Summons</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.summons))}</td></tr> : <tr><th><strong>Summons</strong>:</th> <td>None</td></tr>}
                  <tr>
                    <th><strong>Buffs with Cooldowns</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.buffCd))}</td>
                  </tr>
                  <tr>
                    <th><strong>5th Job Buffs</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.buffFifth))}</td>
                  </tr>
                  {content.buffInfo.binds ? <tr><th><strong>Binds</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.binds))}</td></tr> : <tr><th><strong>Binds</strong>:</th> <td>None</td></tr>}
                  {content.buffInfo.iFrame ? <tr><th><strong>iFrames</strong>:</th> <td className="buff-td">{parse(DOMPurify.sanitize(content.buffInfo.iFrame))}</td></tr> : <tr><th><strong>iFrames</strong>:</th> <td>None</td></tr>}
                </tbody>
              </Table>
            </Col>
          </Row>
        <h2>Skill Build Path</h2>
        <Table borderless>
          <tbody>
            {content.buildPath.build.map((build,index) => 
              <tr key={index}>
                <th>{build[0]}:</th>
                <td className="skill-td">{parse(DOMPurify.sanitize(build[1]))}</td>
              </tr>)}
          </tbody>
        </Table>
        <ul>
            {content.buildPath.details.map((detail,index) => <li key={index}>{parse(DOMPurify.sanitize(detail))}</li>)}
        </ul>
      </Container>
    );
}

/*
    Rendering How to create {Class Name} component of class overview
    Created by: Ikasuu, Fall 2020
*/

export function ClassCreation({className, howToCreate}) {
    return (
        <Container>
            <h2 className="creation-title">How to create a {className}</h2>
            <Image thumbnail
                src={howToCreate.image[0]}
                width={howToCreate.image[1][0]}
                height={howToCreate.image[1][1]}
                className="creation-image"/>
            {howToCreate.npc.map(npc => <Image key={npc} src={npc[0]} width={npc[1][0]} height={npc[1][1]} className="creation-image"/>)}
            <Card className="extra-content-width">
                <Card.Body>{howToCreate.info.map(info => <p key={info}>{parse(DOMPurify.sanitize(info, { ADD_ATTR: ['target'] }))}</p>)}</Card.Body>
            </Card>
        </Container>
    );
}

export function ClassExtraContent({title, content}){
    return(
        <Container>
            <h2>{title}</h2>
            <Card className="extra-content-width">
                <Card.Body>{parse(DOMPurify.sanitize(content, { ADD_ATTR: ['target'] }))}</Card.Body>
            </Card>
        </Container>
    )
}

export default ClassIntro
