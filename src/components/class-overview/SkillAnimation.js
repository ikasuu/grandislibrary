import React, { useState } from 'react';
import { Card, Image, Modal } from 'react-bootstrap';
import '../../css/skill-info.css';

/*
    Component used in SkillInfo to show animations of skill, handles logic for displaying it's own animation in a modal
    Created by: Ikasuu, Fall 2020
*/

function SkillAnimation({animation, name}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <span>
            <Card.Img className="animation" variant="top" src={animation} onClick={handleShow}/>
                <Modal centered  show={show} onHide={handleClose} aria-labelledby="notable-skill" size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="notable-skill">
                            {name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image fluid src={animation} className="modal-animation"/>
                    </Modal.Body>
                </Modal>
        </span>
    );
}

export default SkillAnimation
