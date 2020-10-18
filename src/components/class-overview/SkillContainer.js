import React, { Component } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Image } from 'react-bootstrap';
import SkillInfo from './SkillInfo'
import { version, loadingImage } from '../../special/Values';

/*
    This file contains both SkillContainer and VSkillContainer (exclusively for 5th Job Skills), containers to hold a list of skills
*/

/*
    Skill container that will hold all our skills. Additionally makes the API calls to retrieve data
    Created by: Ikasuu, Fall 2020
*/

export class SkillContainer extends Component {

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
        //Array to hold all our requests that we will execute in one call
        const request = [];
        axiosRetry(axios, { retries: 3 }); //Retries request up to 3 times if request fails
        skillData.forEach(skill => {
            request.push(axios.get(`https://maplestory.io/api/GMS/${version}/job/skill/${skill.id}`));
        })
        //Execute all calls then store the response data in an array and store it in the state
        axios.all(request)
            .then(response => {
                const skillData = [];
                response.forEach(it => skillData.push(it.data));
                if(this._isMounted){
                    this.setState({
                        retrievedData: skillData,
                        loading: false
                    });
                }
            })
            .catch(err => console.log(err));
    }

    componentWillUnmount(){
        this._isMounted = false;
    }


    //Map each skill as a SkillInfo component by passing the following info: Name of skill, Skill Description, Short Description, Skill Properties, and Skill Master Level
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
                                skillData={this.state.skillData[index]}
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

/*
    Skill container that will hold all our skills. Additionally makes the API calls to retrieve data
    Created by: Ikasuu, Fall 2020
*/

export function VSkillContainer({skillData}) {
    return (
        <div>
            {
                skillData.map( skill => 
                    <div key={skill.id}>
                        <SkillInfo 
                            skillData={skill}
                            name={skill.name}
                            properties={{}}
                            shortDesc={skill.shortDesc}
                            maxLevel={"25 + 5"}/>
                    </div>)
            }
        </div>
    );
}

export default SkillContainer
