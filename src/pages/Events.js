import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Helmet } from 'react-helmet';

import { HeaderImageUrl, events } from '../special/Values';
import HeaderImage from '../components/HeaderImage';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// Import CSS
import '../css/page.css';
import '../css/hover.css';

SwiperCore.use([Pagination]);

function Events() {
    return (
        <div>
            <Helmet>
                <title>Events | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.fox}.jpg`}/>
            <h1 className="page-title">Events</h1>
            <h2 className="page-subtitle">Training Related</h2>
            <Container>
                <Swiper
                    pagination={{ clickable: true }}
                    spaceBetween={200}
                    slidesPerView={5}
                >
                    {
                        events.training.map(el => 
                            <SwiperSlide>
                                <Card className="content-card">
                                    <div className="card-image-container">
                                        <Link to={`content/${el[0]}`}><Card.Img variant="top" className="content-card-image hvr-grow" src={`${process.env.PUBLIC_URL}/thumbnail/${el[0]}.png`}/></Link>
                                    </div>
                                    <Card.Body>
                                        <Card.Title><Link to={`content/${el[0]}`}>{el[1]}</Link></Card.Title>
                                        <Card.Text>{el[2]}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Container>
            <h2 className="page-subtitle">Item Related</h2>
            <Container>
                <Swiper
                    pagination={{ clickable: true }}
                    spaceBetween={200}
                    slidesPerView={5}
                >
                    {
                        events.item.map(el => 
                            <SwiperSlide>
                                <Card className="content-card">
                                    <div className="card-image-container">
                                        <Link to={`content/${el[0]}`}><Card.Img variant="top" className="content-card-image hvr-grow" src={`${process.env.PUBLIC_URL}/thumbnail/${el[0]}.png`}/></Link>
                                    </div>
                                    <Card.Body>
                                        <Card.Title><Link to={`content/${el[0]}`}>{el[1]}</Link></Card.Title>
                                        <Card.Text>{el[2]}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Container>
            <h2 className="page-subtitle">Update Related</h2>
            <Container>
                <Swiper
                    pagination={{ clickable: true }}
                    spaceBetween={200}
                    slidesPerView={5}
                >
                    {
                        events.update.map(el => 
                            <SwiperSlide>
                                <Card className="content-card">
                                    <div className="card-image-container">
                                        <Link to={`content/${el[0]}`}><Card.Img variant="top" className="content-card-image hvr-grow" src={`${process.env.PUBLIC_URL}/thumbnail/${el[0]}.png`}/></Link>
                                    </div>
                                    <Card.Body>
                                        <Card.Title><Link to={`content/${el[0]}`}>{el[1]}</Link></Card.Title>
                                        <Card.Text>{el[2]}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Container>
        </div>
    )
}

export default Events
