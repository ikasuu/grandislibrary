import React from 'react';
import { Container } from 'react-bootstrap';

import data from '../special/home-content.json';

import FeaturedSwiper, { ContentSwiper } from '../components/HomepageSwiper';
import { TopClassSwipe } from '../components/ClassSwipe';
import GridContainer from '../components/GridContainer';

// Import CSS
import '../css/homepage.css';

/*
    Homepage
    Created by: Ikasuu, Fall 2020
*/

function Home(){
  return(
    <div style={{marginTop: '-1rem'}}>
      <GridContainer/>
      <Container>
        <FeaturedSwiper content={data.featured}/>
        <h3>Recent News in Global MapleStory</h3>
        <ContentSwiper content={data.recent} launch={true}/>
        <h3>Upcoming Updates</h3>
        <ContentSwiper content={data.upcoming} launch={true}/>
        <h3>Popular Content</h3>
        <ContentSwiper content={data.popularContent} launch={false}/>
        <h3>Last Month's Most Viewed Classes</h3>
        <TopClassSwipe classes={data.popularClasses}/>
      </Container>
    </div>
  );
}

export default Home


