import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { classes } from '../../special/Values';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar]);

function ClassSwipe({classGroup}) {
    return (
        <Swiper
            scrollbar={{ draggable: true, hide: true }}
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
                  },
                
            }}
        >
            {renderSwitch(classGroup)}
        </Swiper>
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
