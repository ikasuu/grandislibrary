import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { version, versionName } from '../special/Values';

import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Row>
                    <Col>
                        <div className="footer-text">© 2020 Grandis Library - All rights reserved.</div>
                        <div className="footer-text">GMS Ver. {version} [{versionName}]</div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer
