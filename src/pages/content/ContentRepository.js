import React, { Component } from 'react';
import HeaderImageUrl from '../../special/Values';
import HeaderImage from '../../components/HeaderImage'

//Content
import SharedCashShopInventory from './shared-cash-shop-inventory';
import StatTerms from './stat-terms';
import AttackSpeed from './attack-speed';
import ProgressionGuide from './progression-guide';
import LinkSkills from './link-skills';
import BossMatchmaking from './boss-matchmaking-pre-quests';
import UpgradeEquipment from './upgrading-enhancing-equipment';
import ContentGuide from './level-content-guide';

//Styling
import '../../css/repository-page.css';

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
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.setState({id: this.props.match.params.id});
        }
    }
    
    componentDidMount(){
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "").split("#");
            const element = document.getElementById(id[1]);
            if(element){element.scrollIntoView();}
        }
    }

    //Renders the proper class groups based on current class group
renderSwitch(param){
    switch (param) {
        case "shared-cash-shop-inventory":
            return(
                <div>
                    <SharedCashShopInventory/>
                </div>
            );

        case "stat-terms":
            return(
                <div>
                    <StatTerms/>
                </div>
            );

        case "attack-speed":
            return(
                <div>
                    <AttackSpeed/>
                </div>
            );

        case "progression-guide":
            return(
                <div>
                    <ProgressionGuide/>
                </div>
            );

        case "link-skills":
            return(
                <div>
                    <LinkSkills/>
                </div>
            );

        case "boss-matchmaking-pre-quests":
            return(
                <div>
                    <BossMatchmaking/>
                </div>
            );

        case "upgrading-enhancing-equipment":
            return(
                <div>
                    <UpgradeEquipment/>
                </div>
            );

        case "level-content-guide":
            return(
                <div>
                    <ContentGuide/>
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

