import React from 'react';
import { version, versionName } from '../special/Values';
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                    <Col>
                        <div style={{textAlign: 'center'}}>© 2020 Grandis Library - All rights reserved.</div>
                        <div style={{textAlign: 'center'}}>GMS Ver. {version} [{versionName}]</div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer
