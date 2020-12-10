import React from 'react'
import { HeaderImageUrl, classes } from '../special/Values';
import HeaderImage from '../components/HeaderImage'
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/class-figure.css';
import '../css/hover.css';
import '../css/page.css';
import { Helmet } from 'react-helmet';

function Classes() {
    return (
        <div>
            <Helmet>
                <title>Classes | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.verdel}.jpg`}/>
            <div>
                <h1 className="page-title">Classes</h1>
                <h2 className="page-subtitle">Explorers</h2>
                <div className="class-container">
                    {classes.explorers.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Cygnus Knights</h2>
                <div className="class-container">
                    {classes.cygnusKnights.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Heroes</h2>
                <div className="class-container">
                    {classes.heroes.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Resistance</h2>
                <div className="class-container">
                    {classes.resistance.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Nova</h2>
                <div className="class-container">
                    {classes.nova.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Sengoku</h2>
                <div className="class-container">
                    {classes.sengoku.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Flora</h2>
                <div className="class-container">
                    {classes.flora.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
                <h2 className="page-subtitle">Other</h2>
                <p className="page-caption">Classes here only share Cash Shop Inventories with their own class - they do not share with each other</p>
                <div className="class-container">
                    {classes.other.map(job => 
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Figure>
                                <Figure.Image
                                    width={120}
                                    height={176}
                                    alt={job[1]}
                                    src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                                <div className="class-overlay"/>
                            </Figure>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Classes
