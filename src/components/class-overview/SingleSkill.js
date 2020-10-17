import React, { Component } from 'react'
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Image } from 'react-bootstrap';
import { version, loadingImage } from '../../special/Values';
import SkillInfo from './SkillInfo'

/*
    Renders a single skill, makes API call and renders a SkillInfo component
    Created by: Ikasuu, Fall 2020
*/

export class SingleSkill extends Component {
    constructor(props) {
        super(props);
    
        //SkillContainer holds all the required skills we need to render in skillData
        //Their data will be stored in retrievedData after it has been fetched
        this.state = {
             retrievedData: [],
             skillData: props.skillData,
             loading: true
        };
    }

    componentDidMount(){
        const { skillData } = this.state
        this._isMounted = true;
        axiosRetry(axios, { retries: 3 }); //Retries request up to 3 times if request fails
        //Execute call then store it in the state
        axios.get(`https://maplestory.io/api/GMS/${version}/job/skill/${skillData.id}`)
            .then(response => {
                if(this._isMounted){
                    const skillData = [];
                    skillData.push(response.data);
                    if(this._isMounted){
                        this.setState({
                            retrievedData: skillData,
                            loading: false
                        });
                    }
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render() {
        const { loading, retrievedData } = this.state
        return (
            <div>
            {
                loading ? <div style={{margin: '2rem 40% 2rem 40%'}}><Image src={loadingImage}/><div style={{paddingLeft: '0.5rem'}}>Loading!</div></div> : 
                <div>
                {
                    retrievedData.map((skill, index) => 
                        <div key={skill.description.id}>
                            <SkillInfo 
                                skillData={this.state.skillData}
                                name={skill.description.name}
                                desc={skill.description.desc}
                                shortDesc={skill.description.shortDesc}
                                properties={skill.properties} 
                                maxLevel={skill.properties.maxLevel}/>
                        </div>)
                }
                </div>
            }
            </div>
        );
    }
}

export default SingleSkill
