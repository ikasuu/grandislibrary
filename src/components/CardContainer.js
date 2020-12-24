import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
    Container responsible for rendering Cards used on Content and Events page
    Created by: Ikasuu, Fall 2020
*/

function CardContainer({content}) {
    return (
        <div className="content-container">
        {
            content.map(el => 
                <Card className="content-card">
                    <Link to={`content/${el[0]}`}><Card.Img variant="top" src={`${process.env.PUBLIC_URL}/thumbnail/${el[0]}.png`} alt={el[1]}/></Link>
                    <Card.Body>
                        <Link to={`content/${el[0]}`}><Card.Title className="content-card-title">{el[1]}</Card.Title></Link>
                        <Card.Text className="content-card-text">{el[2]}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    </div>
    )
}

export default CardContainer
