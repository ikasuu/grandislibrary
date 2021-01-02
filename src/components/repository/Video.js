import React from 'react';

import '../../css/repository-page.css';

function Video({src, title}) {
    return (
        <div className="repository-sm-container">
        <div className="repository-video-container">
            <iframe className="repository-video" src={src} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    )
}

export default Video
