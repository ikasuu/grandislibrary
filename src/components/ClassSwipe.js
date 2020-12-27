import React from 'react';
import { Image, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import styled from 'styled-components';

import { classes } from '../special/Values';
import { Overlay } from '../components/Page';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar]);

/*
This file contains the swiping elements that use the class portraits
In this file you will find:
-ClassGroupContainer - container class element on the Classes page
-TopClassSwipe - most viewed classes swiper element on the Homepage page
-ClassSwipe - swipable class element at the bottom of Class Overview
*/

/*
    Responsible for the class container element on the Classes page
    Created by: Ikasuu, Fall 2020
*/

// Container which holds all the classes for a specfic class group
const ClassContainer = styled.div`
    width: 62%;
    padding-left: 2.5rem;
    margin: auto;

    /* Adjustments to container and figures for mobile / tablet */
    @media(max-width: 1199px){
        width: 95%;
    }

    @media(max-width: 473px){
        padding-left: 1rem;
    }
`;

const ClassFigure = styled(Figure.Image)`
    margin: 0.5rem;
    @media(max-width: 473px){
        margin: 0.25rem;
    }
    @media(max-width: 422px){
        margin: 0;
    }
`;

export function ClassGroupContainer({classGroup}){
    return(
        <ClassContainer>
            {classGroup.map(job => 
                <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                    <Figure>
                        <ClassFigure
                            width={120}
                            height={176}
                            alt={job[1]}
                            src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`}/>
                        <Overlay/>
                    </Figure>
                </Link>
            )}
        </ClassContainer>
    )
}

/*
    Responsible for the most viewed classes swiper element on the Homepage page
    Created by: Ikasuu, Fall 2020
*/

export function TopClassSwipe({classes}){
    return(
        <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
            // when window width is >= 360px
            360: {
                slidesPerView: 3.5,
                },
            // when window width is >= 490px
            490: {
                slidesPerView: 4.5,
                },
            // when window width is >= 770px
            770: {
                slidesPerView: 5.5,
                },
            // when window width is >= 991px
            991: {
                slidesPerView: 8.5,
            },
            // when window width is >= 1199px
            1199: {
                slidesPerView: 9.5,
                }
            }}
        >
            {
                classes.map(content => 
                <SwiperSlide>
                    <Link to={`/classes/${content.class}`} key={content.alt} className="hvr-float">
                        <Image src={`${process.env.PUBLIC_URL}/class-portrait/${content.class}.jpg`} alt={content.alt} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                        <div className="class-overlay"/>
                    </Link>
                </SwiperSlide>
                )
            }
        </Swiper>
    );
}

/*
    Responsible for the swipable class element at the bottom of Class Overview
    Created by: Ikasuu, Fall 2020
*/

function ClassSwipe({classGroup}) {
    let name = classGroup
    
    // Removes words like (Xenon) or (Beast Tamer) for Resistance and Other type classes when displaying <h5>
    if(classGroup.includes("Resistance")){
        name = "Resistance";
    }else if(classGroup.includes("Other")){
        name = "Other";
    }

    return (
        <div>
            <h5>Check out some more {name} classes below:</h5>
            <Swiper
                scrollbar={{ draggable: true, hide: true }}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    // when window width is >= 360px
                    360: {
                        slidesPerView: 3.5
                    },
                    // when window width is >= 490px
                    490: {
                        slidesPerView: 4.5
                    },
                    // when window width is >= 770px
                    770: {
                        slidesPerView: 5.5
                    },
                    // when window width is >= 991px
                    991: {
                    slidesPerView: 8.5
                    },
                    // when window width is >= 1199px
                    1199: {
                        slidesPerView: 9.5
                    }
                }}
            >
                {renderSwitch(name)}
            </Swiper>
        </div>
    )
}

//Renders the proper class groups based on current class group
function renderSwitch(param){
    switch (param) {
        case "Explorers":
            return(
                classes.explorers.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Cygnus Knights":
            return(
                classes.cygnusKnights.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 0 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Heroes":
            return(
                classes.heroes.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Resistance":
            return(
                classes.resistance.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Nova":
            return(
                classes.nova.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Sengoku":
            return(
                classes.sengoku.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Flora":
            return(
                classes.flora.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other":
            return(
                classes.other.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );

        default:
            return(
                classes.explorers.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <Overlay/>
                        </Link>
                    </SwiperSlide>
                )
            );
    }
}

export default ClassSwipe
