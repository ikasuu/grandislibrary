import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import '../css/class-figure.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Pagination, Autoplay, Navigation]);

function FeaturedSwiper({content}) {
    return (
        <Swiper
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            navigation
        >
            {
                content.map(content => 
                <SwiperSlide className="content-slide">
                    <a href={content.link} target="_blank" rel="noreferrer noopener">
                    <Image className="content-image" src={content.image} alt={content.alt} fluid/>
                    <div className="content-overlay-transparent"/>
                    </a>
                </SwiperSlide>
                )
            }
        </Swiper>
    );
}

export function ContentSwiper({content}){
    return(
        <Swiper
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            centeredSlides
            loop
            breakpoints={{
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
                },
            // when window width is >= 991px
            991: {
                slidesPerView: 2,
            }
        }}
        >
        {
            content.map(content => 
            <SwiperSlide className="content-slide">
                <a href={content.link} target="_blank" rel="noreferrer noopener">
                <Image className="content-image" src={content.image} alt={content.alt} fluid/>
                <div className="content-overlay"/>
                <span className="content-launch" style={{background: `url("${process.env.PUBLIC_URL}/icons/launch-white-18dp.svg")`}}/>
                <p className="content-title">{content.title}</p>
                <p className="content-subtitle">{content.date}</p>
                </a>
            </SwiperSlide>
            )
        }
        </Swiper>
    );
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

export default FeaturedSwiper;
