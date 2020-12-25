import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import FeaturedSwiper, { ContentSwiper } from '../components/HomepageSwiper';
import { TopClassSwipe } from '../components/ClassSwipe';
import GridContainer from '../components/GridContainer';
import HeaderImage from '../components/HeaderImage';
import { HeaderImageUrl } from '../special/Values';

// Import CSS
import '../css/homepage.css';

/*
    Homepage
    Created by: Ikasuu, Fall 2020
*/

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: {},
        loading: true,
        fail: false
    };
}

  //Once page is mounted, fetch the contents used for the Swiper components such as Recent News, Upcoming Updates, etc
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
              <FeaturedSwiper content={data.featured}/>
              <h2>Recent News in Global MapleStory</h2>
              <ContentSwiper content={data.recent}/>
              <h2>Upcoming Updates</h2>
              <ContentSwiper content={data.upcoming}/>
              <h2>Popular Content</h2>
              <h2>Last Month's Most Viewed Classes</h2>
              <TopClassSwipe classes={data.popularClasses}/>
            </Container>
          </div>
        }
      </div>
    )
  }
}

export default Home


