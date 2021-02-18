import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import HeaderImageUrl from '../../special/Values';
import HeaderImage from '../../components/HeaderImage'
import { ContentTitle } from '../../components/Page';
import { ScrollToTop } from '../../components/UtilityButtons';

//Content
import SharedCashShopInventory from './shared-cash-shop-inventories';
import StatTerms from './stat-terms';
import AttackSpeed from './attack-speed';
import ProgressionGuide from './progression-guide';
import LinkSkills from './link-skills';
import BossMatchmaking from './boss-matchmaking-pre-quests';
import UpgradeEquipment from './upgrading-enhancing-equipment';
import ContentGuide from './level-content-guide';
import KeyboardShortcuts from './keyboard-shortcuts';

import '../../css/repository-page.css';

/*
    Special component used to handle render requests for each unique Content page
    Created by: Ikasuu, Fall 2020
*/

export class ContentRepository extends Component {

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
            case "shared-cash-shop-inventories":
                return(
                    <div>
                        <Helmet>
                            <title>Shared Cash Shop Inventories | Grandis Library</title>
                            <meta name={"A list of all classes that share Cash Shop inventories"} content="description"/>
                        </Helmet>
                        <ContentTitle>Shared Cash Shop Inventory</ContentTitle>
                        <SharedCashShopInventory/>
                    </div>
                );

            case "stat-terms":
                return(
                    <div>
                        <Helmet>
                            <title>Stat Terms | Grandis Library</title>
                            <meta name={"An explanation of each stat in the Character Stat UI and other special stats"} content="description"/>
                        </Helmet>
                        <ContentTitle>Stat Terms</ContentTitle>
                        <StatTerms/>
                    </div>
                );

            case "attack-speed":
                return(
                    <div>
                        <Helmet>
                            <title>Attack Speed | Grandis Library</title>
                            <meta name={"An explanation of Attack Speed and the difference between Soft Cap and Hard Cap attack speed"} content="description"/>
                        </Helmet>
                        <ContentTitle>Attack Speed</ContentTitle>
                        <AttackSpeed/>
                    </div>
                );

            case "progression-guide":
                return(
                    <div>
                        <Helmet>
                            <title>Progression Guide | Grandis Library</title>
                            <meta name={"A guide to important content such as equipment, bosses, training maps, quests and 5th Job Advancement"} content="description"/>
                        </Helmet>
                        <ContentTitle>Progression Guide</ContentTitle>
                        <ProgressionGuide/>
                    </div>
                );

            case "link-skills":
                return(
                    <div>
                        <Helmet>
                            <title>Link Skill | Grandis Library</title>
                            <meta name={"An explanation of Link Skills and a list of all Link Skills and their Master Levels and effects"} content="description"/>
                        </Helmet>
                        <ContentTitle>Link Skills</ContentTitle>
                        <LinkSkills/>
                    </div>
                );

            case "boss-matchmaking-pre-quests":
                return(
                    <div>
                        <Helmet>
                            <title>Boss Pre-Quests | Grandis Library</title>
                            <meta name={"An explanation on how to unlock access to each of the bosses in the Boss Matchmaking System"} content="description"/>
                        </Helmet>
                        <ContentTitle>Boss Pre-Quests</ContentTitle>
                        <BossMatchmaking/>
                    </div>
                );

            case "upgrading-enhancing-equipment":
                return(
                    <div>
                        <Helmet>
                            <title>Upgrading & Enhancing Equipment | Grandis Library</title>
                            <meta name={"An explanation on the different possible ways to upgrade and enhance your gear"} content="description"/>
                        </Helmet>
                        <ContentTitle>Upgrading & Enhancing Equipment</ContentTitle>
                        <UpgradeEquipment/>
                    </div>
                );

            case "level-content-guide":
                return(
                    <div>
                        <Helmet>
                            <title>Level Content Guide | Grandis Library</title>
                            <meta name={"An explanation on the different possible ways to upgrade and enhance your gear"} content="description"/>
                        </Helmet>
                        <ContentTitle>Level Content Guide</ContentTitle>
                        <ContentGuide/>
                    </div>
                );

            case "keyboard-shortcuts":
                return(
                    <div>
                        <Helmet>
                            <title>Keyboard Shortcuts | Grandis Library</title>
                            <meta name={"An explanation on the all the different UIs accessible from the Keyboard Shortcuts"} content="description"/>
                        </Helmet>
                        <ContentTitle>Keyboard Shortcuts</ContentTitle>
                        <KeyboardShortcuts/>
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

export default ContentRepository

