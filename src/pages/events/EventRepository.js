import React, { Component } from 'react';

import HeaderImageUrl from '../../special/Values';
import HeaderImage from '../../components/HeaderImage'
import { ContentTitle } from '../../components/Page';

//Content
import BurningWorld from './burning-world';
import WhoToTeraBurn from './who-to-tera-burn';

import '../../css/repository-page.css';
import TeraBurning from './tera-burning';
import MegaBurning from './mega-burning';
import MapleRelay from './maple-relay';
import MaplehoodWatch from './maplehood-watch';
import SynergyRing from './synergy-ring';
import ChaosRing from './chaos-ring';
import UpdateTimelineOverview from './update-timeline-overview';

/*
    Special component used to handle render requests for each unique Event page
    Created by: Ikasuu, Fall 2020
*/

export class EventRepository extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: props.match.params.id
        };
    }

    render() {
        return (
            <div>
                <HeaderImage imageUrl={`${HeaderImageUrl.ristonia}.jpg`}/>
                <div className="content-container">
                    {this.renderSwitch(this.state.id)}
                </div>
            </div>
        )
    }

    // Check if the url id changed (do we need to render a different page?)
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.setState({id: this.props.match.params.id});
        }
    }
    
    // Once page is mounted, check if the url contains an anchor tag, if so, jump to it
    componentDidMount(){
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "").split("#");
            const element = document.getElementById(id[1]);
            if(element){element.scrollIntoView();}
        }
    }

    //Renders the proper Content page based on url id
    renderSwitch(param){
        switch (param) {
            case "burning-world":
                return(
                    <div>
                        <ContentTitle>Burning World</ContentTitle>
                        <BurningWorld/>
                    </div>
                );

            case "who-to-tera-burn":
                return(
                    <div>
                        <ContentTitle>Who To Tera Burn</ContentTitle>
                        <WhoToTeraBurn/>
                    </div>
                );

            case "tera-burning":
                return(
                    <div>
                        <ContentTitle>Tera Burning</ContentTitle>
                        <TeraBurning/>
                    </div>
                );

            case "mega-burning":
                return(
                    <div>
                        <ContentTitle>Mega Burning</ContentTitle>
                        <MegaBurning/>
                    </div>
                );

            case "maple-relay":
                return(
                    <div>
                        <ContentTitle>Maple Relay</ContentTitle>
                        <MapleRelay/>
                    </div>
                );

            case "maplehood-watch":
                return(
                    <div>
                        <ContentTitle>Maplehood Watch</ContentTitle>
                        <MaplehoodWatch/>
                    </div>
                );

            case "synergy-ring":
                return(
                    <div>
                        <ContentTitle>Synergy Ring</ContentTitle>
                        <SynergyRing/>
                    </div>
                );

            case "chaos-ring":
                return(
                    <div>
                        <ContentTitle>Chaos Ring</ContentTitle>
                        <ChaosRing/>
                    </div>
                );

            case "update-timeline-overview":
                return(
                    <div>
                        <ContentTitle>Update Timeline Overview</ContentTitle>
                        <UpdateTimelineOverview/>
                    </div>
                );

            default:
                return(
                    <div>
                        <h3>Looks like there was an error in the URL you entered,
                        the page you are looking for may be moved or deleted.</h3>
                    </div>
                );
        }
    }
}

export default EventRepository
