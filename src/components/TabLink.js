import React from 'react';

function TabLink({url}) {
    return (
<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    )
}

export default TabLink
