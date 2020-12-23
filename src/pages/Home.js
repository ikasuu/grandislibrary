import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

import GridContainer from '../components/GridContainer';
import HeaderImage from '../components/HeaderImage';
import { HeaderImageUrl } from '../special/Values';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

// Import CSS
import '../css/homepage.css';

SwiperCore.use([Pagination, Autoplay, Navigation]);

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: {},
        loading: true,
        fail: false
    };
}

  componentDidMount(){
    fetch("./data/home-content.json")
    .then(res => res.json())
    .then(fetchedData => this.setState({data: fetchedData, loading: false, fail: false}))
    .catch(err => this.setState({fail: true}));
}

  render() {
    const { loading, fail, data } = this.state ;
    return (
      <div>
        {
          loading ? 
              <div>
                <HeaderImage imageUrl={`${HeaderImageUrl.library}.jpg`}/>
                <Container>{fail ? <h3>Looks like there was an error in the URL you entered,
                  the page you are looking for may be moved or deleted.</h3> : ""}</Container>
              </div> :
          <div style={{marginTop: '-1rem'}}>
            <GridContainer/>
            <Container>
              <Swiper
                  autoplay={{ delay: 7000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop
                  navigation
              >
                {
                  data.featured.map(content => 
                    <SwiperSlide className="content-slide">
                      <a href={content.link} target="_blank" rel="noreferrer noopener">
                        <Image className="content-image" src={content.image} alt={content.alt} fluid/>
                        <div className="content-overlay-transparent"/>
                      </a>
                    </SwiperSlide>
                  )
                }
              </Swiper>
              <h2>Recent News in Global MapleStory</h2>
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
                  data.recent.map(content => 
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
              <h2>Upcoming Updates</h2>
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
                  data.upcoming.map(content => 
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
              <h2>Popular Content</h2>
              <h2>Last Month's Most Viewed Classes</h2>
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
                  data.popularClasses.map(content => 
                    <SwiperSlide>
                      <Link to={`/classes/${content.class}`} key={content.alt} className="hvr-float">
                          <Image src={`${process.env.PUBLIC_URL}/class-portrait/${content.class}.jpg`} alt={content.alt} style={{width: '100px', margin: '1rem 0 1rem 0'}}/>
                          <div className="class-overlay"/>
                      </Link>
                    </SwiperSlide>
                  )
                }
            </Swiper>
            </Container>
          </div>
        }
      </div>
    )
  }
}

export default Home


