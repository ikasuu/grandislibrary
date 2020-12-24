import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HeaderImageUrl, content } from '../special/Values';
import HeaderImage from '../components/HeaderImage';

// Import CSS
import '../css/page.css';

function Content() {
    return (
        <div>
            <Helmet>
                <title>Content | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.ristonia}.jpg`}/>
            <h1 className="page-title">Content</h1>
            <h2 className="page-subtitle">Gameplay Related</h2>
            <div className="content-container">
                {
                    content.gameplay.map(el => 
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
            <h2 className="page-subtitle">Class Related</h2>
            <div className="content-container">
                {
                    content.class.map(el => 
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
            <h2 className="page-subtitle">Equipment Related</h2>
            <div className="content-container">
                {
                    content.equipment.map(el => 
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

export default Content
