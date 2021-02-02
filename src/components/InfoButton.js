import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

/*
    Info Button which when hovered shows a tooltip
    Created by: Ikasuu, Fall 2020
*/

function InfoButton({tooltip}) {
    return (
        <OverlayTrigger placement="top" overlay={
            <Tooltip style={{zIndex: '1'}}>
                {tooltip}
            </Tooltip>
        }>
            <Button variant="link"><span className="info-button"/></Button>
        </OverlayTrigger>
    );
}

export default InfoButton;
