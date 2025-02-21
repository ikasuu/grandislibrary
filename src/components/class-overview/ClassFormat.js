import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';
import styled from 'styled-components';

//Formatting helper functions for class overviews
//Created by Ikasuu Spring 2025

//Component for a skill icon with a hoverable tooltip
function SkillTooltip({image, tooltip}){
    const overlay = <Tooltip style={{ zIndex: '1' }}>{tooltip}</Tooltip>;

    return(
        <OverlayTrigger placement="top" overlay={overlay}>
            <img src={image} alt={tooltip}/>
        </OverlayTrigger>
    );
}

//Bold text (of all things within [...] square brackets)
export function formatBoldText(content){
    return reactStringReplace(content, /(?=\[)(.*?)(?<=\])/g, (text, i) => (<strong key={i}>{text}</strong>));
}

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatSkillTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let img = text.match(/(?<=src={)(.*?)(?=})/g);
        let tip = text.match(/(?<=tip={)(.*?)(?=})/g);
        return(
            <SkillTooltip key={i} image={img} tooltip={tip}/>
        );
    });
}

//Skill icons w/ tooltips
//Format: <tt src={...} tip={...}> 
export function formatActivesTooltip(content){
    return reactStringReplace(content, /(?=<tt)(.*?)(?<=>)/g, (text, i) => {
        let img = text.match(/(?<=src={)(.*?)(?=})/g);
        let tip = text.match(/(?<=tip={)(.*?)(?=})/g);
        let duration = text.match(/(?<=dur={)(.*?)(?=})/g);

        const Wrapper = duration ? "div" : "span"; //Special case for toggles to display on same line

        return (
            <Wrapper key={i}>
                <SkillTooltip image={img} tooltip={tip}/>
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
        return(
            <img src={image} alt={altText}/>
        );
    });
}

//Component from the skill blocks that are used in the base stats section
const SkillBlock = styled.span`
    /* Adjust the background from the properties */
    background-image: ${props => props.color};
    line-height: ${props => props.lineHeight};

    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    border-radius: .25rem;
    display: inline-block;
    vertical-align: bottom;
    color: #fff;
    white-space: nowrap;
`

//Helper function to convert skill type to corresponding color
function skillBlockTypeToColor(color){
    switch(color){
        case "debuff":
            return "#5C9A3A";
        case "toggle":
            return "#C65895";
        case "temp":
            return "#2E94B6";
        case "opt":
            return "#CC6A2A";
        case "alpha":
            return "#176BCB";
        case "beta":
            return "#D53F3F";
        default:
            return "#6C757D";
    };
};

//Helper function to format given colors into use in SkillBlock
function skillBlockColor(colorOne, colorTwo){
    return `linear-gradient(120deg, ${colorOne} 50%, ${colorTwo} 50%)`;
};

//Skill Blocks
//Format: <link type={...} subType={...} src={...} tip={...} val={...}>
//type and subType are optional for color coding a skill block, default: gray
//src and tip is optional for displaying a skill icon
//val is the text description
export function formatSkillBadge(content){
    return reactStringReplace(content, /(?=<bg)(.*?)(?<=>)/g, (badge, i) => {
        let type = badge.match(/(?<=type={)(.*?)(?=})/g);
        let subType = badge.match(/(?<=sub={)(.*?)(?=})/g);
        let img = badge.match(/(?<=src={)(.*?)(?=})/g);
        let tip = badge.match(/(?<=tip={)(.*?)(?=})/g);
        let text = badge.match(/(?<=val={)(.*?)(?=})/g);

        const height = img ? "1rem" : "2rem";

        let colorOne = skillBlockTypeToColor(type ? type[0] : "default");
        let colorTwo = skillBlockTypeToColor(subType ? subType[0] : "default");
        let gradient = skillBlockColor(colorOne, subType ? colorTwo : colorOne);

        return (
            <SkillBlock color={gradient} key={i} lineHeight={height}>
                {img ? img.map((item, index) => <SkillTooltip key={index} image={item} tooltip={tip[index]}/>) : <></>} <div style={{display: 'inline-block'}}>{text.map((item, index) => <div key={index}>{item}</div>)}</div> {subType ? <SubBadge content={badge}/> : <></>}
            </SkillBlock>
        );
    });
}

function SubBadge({content}){
    let img = content.match(/(?<=subSrc={)(.*?)(?=})/g);
    let tip = content.match(/(?<=subTip={)(.*?)(?=})/g);
    let text = content.match(/(?<=subVal={)(.*?)(?=})/g);

    return(
        img ? <span><SkillTooltip image={img} tooltip={tip}/> ({text})</span> : <></>
    );
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