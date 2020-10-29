import React from 'react'
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import '../css/page.css';
import { Helmet } from 'react-helmet';

function Resources() {
    return (
        <div>
            <Helmet>
                <title>Resources | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.grandis}.jpg`}/>
            <h1 className="page-title">Resources</h1>
        </div>
    )
}

export default Resources
