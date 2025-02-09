import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';

//Formatting helper functions
//Created by Ikasuu Spring 2025

//Bold text (of all things within [...] square brackets)
export function formatBoldText(content){
    return reactStringReplace(content, /(?=\[)(.*?)(?<=\])/g, (text, i) => (<strong key={i}>{text}</strong>));
}

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatSkillTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let image = text.match(/(?<=src={)(.*?)(?=})/g);
        let tooltip = text.match(/(?<=tip={)(.*?)(?=})/g);
        return(
            <OverlayTrigger key={i} placement="top" overlay={
                <Tooltip style={{zIndex: '1'}}>
                    {tooltip}
                </Tooltip>
            }><img src={image} alt={tooltip}/></OverlayTrigger>
        );
    });
}

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatActivesTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let image = text.match(/(?<=src={)(.*?)(?=})/g);
        let tooltip = text.match(/(?<=tip={)(.*?)(?=})/g);
        let duration = text.match(/(?<=dur={)(.*?)(?=})/g);

        const overlay = <Tooltip style={{ zIndex: '1' }}>{tooltip}</Tooltip>;
        const Wrapper = duration ? "div" : "span"; //Special case for toggles to display on same line

        return (
            <Wrapper key={i}>
                <OverlayTrigger placement="top" overlay={overlay}>
                    <img src={image} alt={tooltip} />
                </OverlayTrigger>
                {duration && duration}
            </Wrapper>
        );
    });
}

//Links
//Format: <link href={...} title={...}> 
export function formatLinkText(content){
    return reactStringReplace(content, /(?=<link)(.*?)(?<=>)/g, (text, i) => {
        let url = text.match(/(?<=href={)(.*?)(?=})/g);
        let title = text.match(/(?<=title={)(.*?)(?=})/g);
        return(<a key={i} href={url} target="_blank" rel="noreferrer noopener">{title}</a>);
    });
}

export function formatBulletPoint(content){
    //Bullet points
    //Format: <bp_..._..._>, separated by '_'
    return reactStringReplace(content, /(?=<bp)(.*?)(?<=_>)/g, (text, i) => {
        let points = text.split("_");
        //Remove first and last element from array (<bp & >)
        points.pop();
        points.shift();
        return(
            <ul key={i}>
                {points.map((item, j) => {
                    let formatText = formatBoldText(item);
                    formatText = formatSkillTooltip(formatText);
                    formatText = formatLinkText(formatText);
                    return(<li key={j}>{formatText}</li>)
                })}
            </ul>
        );
    });
}

export function formatImage(content){
    return reactStringReplace(content, /(?=<img)(.*?)(?<=>)/g, (text, i) => {
        let image = text.match(/(?<=src={)(.*?)(?=})/g);
        let altText = text.match(/(?<=alt={)(.*?)(?=})/g);
        let optVal = text.match(/(?<=alt={)(.*?)(?=})/g);
        return(
            <img src={image} alt={altText}/>
        );
    });
}

// Stylizes the given text using the mark up within the text
export default function formatSkillText(content){
    let returnString;
    returnString = formatBulletPoint(content);
    returnString = formatSkillTooltip(returnString);
    returnString = formatBoldText(returnString);
    returnString = formatLinkText(returnString);

    return returnString;
};