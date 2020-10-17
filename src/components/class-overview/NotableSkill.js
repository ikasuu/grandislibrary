import React, { useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import '../../css/hover.css';

/*
    Displays the notable skills in the class properties section and handles modal logic
    Created by: Ikasuu, Fall 2020
*/

function NotableSkill({ skill }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <span>
            <Image src={skill.icons[0]} className="hvr-grow" style={{margin: '0 0.25rem 0.5rem 0.25rem', cursor: 'pointer'}} onClick={handleShow}/>
            <Modal centered  show={show} onHide={handleClose} aria-labelledby="notable-skill" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="notable-skill">
                            {skill.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={skill.animations[0]} style={{width: '100%', backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)'}}/>
                </Modal.Body>
            </Modal>
        </span>
    );
}

export default NotableSkill
