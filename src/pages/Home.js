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
        <h2>Recent News in Global MapleStory</h2>
        <ContentSwiper content={data.recent} launch={true}/>
        <h2>Upcoming Updates</h2>
        <ContentSwiper content={data.upcoming} launch={true}/>
        <h2>Popular Content</h2>
        <ContentSwiper content={data.popularContent} launch={false}/>
        <h2>Last Month's Most Viewed Classes</h2>
        <TopClassSwipe classes={data.popularClasses}/>
      </Container>
    </div>
  );
}

export default Home


