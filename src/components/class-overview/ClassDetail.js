import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import InfoButton from '../InfoButton';
import '../../css/class-overview.css';

/*
    Rendering base stats, buffs + actives, and link skill component in class overviews
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

export default ClassDetail
