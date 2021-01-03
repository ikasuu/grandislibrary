import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import styled from 'styled-components';
import { Badge, Card, Container } from 'react-bootstrap';

import data from '../special/resource-faq.json';

import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import * as Page from '../components/Page';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar, Mousewheel]);

/*
    Resources page
    Created by: Ikasuu, Fall 2020
*/

const FaqSwiper = styled(Swiper)`
    max-height: 50rem;
    overflow: hidden;
`;

const FaqSearch = styled.input`
    margin: 2.5rem 0 1.5rem 0;
    padding-left: 1rem;
    width: 95%;
    height: 2.5rem;
`;

const FaqSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const FaqQuestion = styled(Card.Title)`
    margin: 1rem 1rem -0.5rem 1rem;
`;

const FaqBadge = styled(Badge)`
    margin-right: 0.5rem;
`;

function Resources() {
    return (
        <div>
            <Helmet>
                <title>Resources | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.grandis}.jpg`}/>
            <Page.Title>Resources</Page.Title>
            <Container>
                <h2>Frequently Asked Questions</h2>
                <FaqSearchWrapper><FaqSearch type="text" placeholder="Search"></FaqSearch></FaqSearchWrapper>
                <FaqSwiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView="auto"
                direction="vertical"
                freeMode
                mousewheel
                >
                    {
                        data.faq.map( (question, index) => 
                        <SwiperSlide key={index}>
                            <Card>
                                <FaqQuestion>{question.question}</FaqQuestion>
                                <Card.Body>
                                    <Card.Text>{question.badges.map(badge => <FaqBadge variant="secondary">{badge}</FaqBadge>)}</Card.Text>
                                    {question.answer.map(answer => <Card.Text>{answer}</Card.Text>)}
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        )
                    }
                </FaqSwiper>
            </Container>
        </div>
    )
}

export default Resources
