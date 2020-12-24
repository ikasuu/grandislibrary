import React from 'react';
import { Image, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';

import { classes } from '../special/Values';

import '../css/class-figure.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar]);

/*
This file contains the swiping elements that use the class portraits
In this file you will find:
-ClassSwipe - swipable class element at the bottom of Class Overview
-ClassGroupContainer - container class element on the Classes page
-TopClassSwipe - most viewed classes swiper element on the Homepage page
*/

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
                {renderSwitch(classGroup)}
            </Swiper>
        </div>
    )
}

/*
    Responsible for the class container element on the Classes page
    Created by: Ikasuu, Fall 2020
*/

export function ClassGroupContainer({classGroup}){
    return(
        <div className="class-container">
            {classGroup.map(job => 
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Resistance (Xenon)":
            return(
                classes.resistance.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Resistance (Demon)":
            return(
                classes.resistance.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other (Anima)":
            return(
                classes.other.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other (FriendStory)":
            return(
                classes.other.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other (Child of God)":
            return(
                classes.other.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );

        case "Other (Beast Tamer)":
            return(
                classes.other.map(job => 
                    <SwiperSlide>
                        <Link to={`/classes/${job[0]}`} key={job} className="hvr-float">
                            <Image src={`${process.env.PUBLIC_URL}/class-portrait/${job[0]}.jpg`} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                            <div className="class-overlay"/>
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
                            <div className="class-overlay"/>
                        </Link>
                    </SwiperSlide>
                )
            );
    }
}

export default ClassSwipe
