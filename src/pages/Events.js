import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, events } from '../special/Values';
import HeaderImage from '../components/HeaderImage';

// Import CSS
import '../css/page.css';

function Events() {
    return (
        <div>
            <Helmet>
                <title>Events | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.fox}.jpg`}/>
            <h1 className="page-title">Events</h1>
            <h2 className="page-subtitle">Training Related</h2>
            <div className="content-container">
                {
                    events.training.map(el => 
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
            <h2 className="page-subtitle">Item Related</h2>
            <div className="content-container">
                {
                    events.item.map(el => 
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
            <h2 className="page-subtitle">Update Related</h2>
            <div className="content-container">
                {
                    events.update.map(el => 
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
        </div>
    )
}

export default Events
