import React, { Component } from 'react';
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import '../css/page.css';

export class about extends Component {

    render(){
        return (
        <div>
            <HeaderImage imageUrl={`${HeaderImageUrl.library}.jpg`}/>
            <h1 className="page-title">About</h1>
        </div>
          )
    }
}

export default about