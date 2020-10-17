import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/dropdown-nav.css';

/*
    Dropdown menu component
    Created by: Ikasuu, Fall 2020
*/

function DropdownNav(props) {
    const setExpanded = props.setExpanded;
    return (
        <div className="menu">
            <Button className="nav-link-button nav-props" variant="link">Quick Links</Button>
            <div className="dropdown-menu">
                <Link className="nav-link-button nav-props" to="/content" onClick={() => setExpanded(false)}>Content</Link>
                <Link className="nav-link-button nav-props" to="/classes" onClick={() => setExpanded(false)}>Classes</Link>
                <Link className="nav-link-button nav-props" to="/events" onClick={() => setExpanded(false)}>Events</Link>
                <Link className="nav-link-button nav-props" to="/resources" onClick={() => setExpanded(false)}>Resources</Link>
            </div>
        </div>
    );
}

export default DropdownNav
