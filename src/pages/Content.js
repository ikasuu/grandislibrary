import React from 'react'
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage'
import '../css/page.css';
import { Helmet } from 'react-helmet';

function Content() {
    return (
        <div>
            <Helmet>
                <title>Content | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.ristonia}.jpg`}/>
            <h1 className="page-title">Content</h1>
        </div>
    )
}

export default Content
