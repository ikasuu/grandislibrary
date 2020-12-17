import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage';

function NotFound() {
    return (
        <div>
            <HeaderImage imageUrl={`${HeaderImageUrl.library}.jpg`}/>
            <Container>
                <h3>Looks like there was an error in the URL you entered,
                the page you are looking for may be moved or deleted.</h3>
            </Container>
        </div>
    )
}

export default NotFound