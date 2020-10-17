import React from 'react'
import { HeaderImageUrl, classes } from '../special/Values';
import HeaderImage from '../components/HeaderImage'
import { Container, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/class-figure.css';
import '../css/page.css';

function Classes() {
    return (
        <div>
            <HeaderImage imageUrl={`${HeaderImageUrl.verdel}.jpg`}/>
            <Container>
                <h1 className="page-title">Classes</h1>
                <h2 className="page-subtitle">Explorers</h2>
                {classes.explorers.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Cygnus Knights</h2>
                {classes.cygnusKnights.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Heroes</h2>
                {classes.heroes.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Resistance</h2>
                {classes.resistance.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Nova</h2>
                {classes.nova.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Sengoku</h2>
                {classes.sengoku.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Flora</h2>
                {classes.flora.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
                <h2 className="page-subtitle">Other</h2>
                <p className="page-caption">Classes here only share Cash Shop Inventories with their own class - they do not share with each other</p>
                {classes.other.map(job => 
                    <Link to={`/classes/${job[0]}`}>
                        <Figure>
                            <Figure.Image
                                width={180}
                                height={107}
                                alt={job[1]}
                                src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                            <Figure.Caption>{job[1]}</Figure.Caption>
                        </Figure>
                    </Link>
                )}
            </Container>
        </div>
    )
}

export default Classes
