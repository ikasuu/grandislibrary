import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';

import '../css/page.css';

/*
    About page
    Created by: Ikasuu, Fall 2020
*/

export class about extends Component {

    render(){
        return (
        <div>
            <Helmet>
                <title>About | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.library}.jpg`}/>
            <h1 className="page-title">About</h1>
        </div>
          )
    }
}

export default about