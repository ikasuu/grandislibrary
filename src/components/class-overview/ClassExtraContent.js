import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import '../../css/class-overview.css';

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

export default ClassCreation
