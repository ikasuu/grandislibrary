import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import HeaderImageUrl from '../../special/Values';
import HeaderImage from '../../components/HeaderImage'
import { ContentTitle } from '../../components/Page';
import { ScrollToTop } from '../../components/UtilityButtons';

//Content
import BurningWorld from './burning-world';
import WhoToTeraBurn from './who-to-tera-burn';
import TeraBurning from './tera-burning';
import MegaBurning from './mega-burning';
import MapleRelay from './maple-relay';
import MaplehoodWatch from './maplehood-watch';
import SynergyRing from './synergy-ring';
import ChaosRing from './chaos-ring';
import UpdateTimelineOverview from './update-timeline-overview';

import '../../css/repository-page.css';

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
                <HeaderImage imageUrl={HeaderImageUrl.ristonia}/>
                <div className="content-container">
                    {this.renderSwitch(this.state.id)}
                </div>
                <ScrollToTop/>
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
                        <Helmet>
                            <title>Burning World | Grandis Library</title>
                            <meta content={"Burning World is a temporary world that has special benefits for all characters in this world"} name="description"/>
                        </Helmet>
                        <ContentTitle>Burning World</ContentTitle>
                        <BurningWorld/>
                    </div>
                );

            case "who-to-tera-burn":
                return(
                    <div>
                        <Helmet>
                            <title>Who to Tera Burn | Grandis Library</title>
                            <meta content={"A guide to help you choose a character to Tera Burn based on good Link Skills and Legion bonuses"} name="description"/>
                        </Helmet>
                        <ContentTitle>Who To Tera Burn</ContentTitle>
                        <WhoToTeraBurn/>
                    </div>
                );

            case "tera-burning":
                return(
                    <div>
                        <Helmet>
                            <title>Tera Burning | Grandis Library</title>
                            <meta content={"An event where NEWLY created characters after level 10 gain 2 extra levels for every level up until level 200"} name="description"/>
                        </Helmet>
                        <ContentTitle>Tera Burning</ContentTitle>
                        <TeraBurning/>
                    </div>
                );

            case "mega-burning":
                return(
                    <div>
                        <Helmet>
                            <title>Mega Burning | Grandis Library</title>
                            <meta content={"An event where created characters after level 10 gain 2 extra levels for every level up until level 150"} name="description"/>
                        </Helmet>
                        <ContentTitle>Mega Burning</ContentTitle>
                        <MegaBurning/>
                    </div>
                );

            case "maple-relay":
                return(
                    <div>
                        <Helmet>
                            <title>Maple Relay | Grandis Library</title>
                            <meta content={"Maple Relay is an event where you receive rewards for simply staying online. Obtain gifts daily and at each milestone"} name="description"/>
                        </Helmet>
                        <ContentTitle>Maple Relay</ContentTitle>
                        <MapleRelay/>
                    </div>
                );

            case "maplehood-watch":
                return(
                    <div>
                        <Helmet>
                            <title>Maplehood Watch | Grandis Library</title>
                            <meta content={"An event where players can earn free cash items. The event lasts for two weeks and each week has 3 special days with free gifts"} name="description"/>
                        </Helmet>
                        <ContentTitle>Maplehood Watch</ContentTitle>
                        <MaplehoodWatch/>
                    </div>
                );

            case "synergy-ring":
                return(
                    <div>
                        <Helmet>
                            <title>Synergy Ring | Grandis Library</title>
                            <meta content={"An event ring that gains increased stats depending on how many characters you have the ring equipped on the same world"} name="description"/>
                        </Helmet>
                        <ContentTitle>Synergy Ring</ContentTitle>
                        <SynergyRing/>
                    </div>
                );

            case "chaos-ring":
                return(
                    <div>
                        <Helmet>
                            <title>Chaos Ring | Grandis Library</title>
                            <meta content={"An event ring that has allows you to reroll the ring’s stats and potential for free a fixed number of times each week"} name="description"/>
                        </Helmet>
                        <ContentTitle>Chaos Ring</ContentTitle>
                        <ChaosRing/>
                    </div>
                );

            case "update-timeline-overview":
                return(
                    <div>
                        <Helmet>
                            <title>Update Timeline Overview | Grandis Library</title>
                            <meta content={"Looking to catch up? Take a look at an overview of every update so far from Big Bang to the current update"} name="description"/>
                        </Helmet>
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
