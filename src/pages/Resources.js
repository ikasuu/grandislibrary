import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';
import styled from 'styled-components';
import { Card, Container, Tab, Table, Tabs } from 'react-bootstrap';

import data from '../special/resource-content.json';

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
    width: 90%;
    max-height: 50rem;
    min-height: 50rem;
    overflow: hidden;
`;

const FaqSearch = styled.input`
    margin: 0 0 1.5rem 0;
    padding-left: 1rem;
    width: 95%;
    height: 3rem;
    border: none;
    -webkit-filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
    filter: drop-shadow( 3px 3px 3px rgba(0, 0, 0, .2));
`;

const FaqSearchWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const FaqQuestion = styled(Card.Title)`
    margin: 1rem 1rem -0.5rem 1rem;
`;

function Resources() {
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
        <div>
            <Helmet>
                <title>Resources | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.grandis}.jpg`}/>
            <Page.Title>Resources</Page.Title>
            <Container>
                <Tabs>
                    <Tab eventKey="links" title="Useful Links">
                        <Table borderless>
                            <tbody>
                                {data.links.map(link => 
                                    <tr><td><img src={link.icon} alt="icon" style={{width: '32px', height: '32px'}}/></td><td>{link.title}</td><td><Page.TabLink url={link.url}>{link.url}</Page.TabLink></td></tr>
                                )}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="creators" title="Maple Content Creators">
                        <Table borderless>
                            <tbody>
                                {data.creators.map(link => 
                                    <tr><td><img src={link.icon} alt="icon" style={{width: '32px', height: '32px'}}/></td><td>{link.title}</td><td><Page.TabLink url={link.url}>{link.url}</Page.TabLink></td></tr>
                                )}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
                <h2>Frequently Asked Questions</h2>
                <p>To use Filter Search, type a few words, do not type a whole sentence</p>
                <FaqSearchWrapper><FaqSearch className="faq-search" type="text" placeholder="Filter Search" onChange={event => setSearchTerm((event.target.value).toLowerCase())}></FaqSearch></FaqSearchWrapper>
                <FaqSwiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView="auto"
                direction="vertical"
                freeMode
                mousewheel
                >
                    {
                        data.faq.filter((val) => {
                            if(searchTerm === "") return val;
                            else if(val.question.toLowerCase().includes(searchTerm) || val.tags.includes(searchTerm)) return val;
                        }).map( (question, index) => 
                        <SwiperSlide key={index}>
                            <Card>
                                <FaqQuestion>{question.question}</FaqQuestion>
                                <Card.Body>
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
