import React from 'react'
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';
import '../css/page.css';

function Resources() {
    return (
        <div>
            <HeaderImage imageUrl={`${HeaderImageUrl.grandis}.jpg`}/>
            <h1 className="page-title">Resources</h1>
        </div>
    )
}

export default Resources
