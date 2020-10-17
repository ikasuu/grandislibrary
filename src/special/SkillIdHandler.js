import React, { Component } from 'react'
import axios from 'axios'

/*
    Special dev tool for extracting Skill IDs and putting them into an array and logging it into the console
    Created by: Ikasuu, Fall 2020
*/

export class SkillIdHandler extends Component {
    constructor(props) {
        super(props)
    
        //isHyper is used to extract only Hyper Skills which is stored in the 4th Job Skill data. Property can be omitted if hyper skills not need (ex. 1st, 2nd, 3rd, 4th Job Skills)
        this.state = {
             classId: this.props.classId,
             isHyper: this.props.isHyper
        }
    }
    
    componentDidMount(){
        axios.get(`https://maplestory.io/api/GMS/216/job/${this.state.classId}/skillbook`)
        .then(response =>{
            const array = []
            response.data.skills.forEach(it => {
                //Omit hidden skills which have no desc
                if(!it.invisible){
                    //Checks if skill is a hyper skill then checks if we want hyper skills or not
                    if(it.hyper){
                        if(this.state.isHyper){
                            array.push(it.id);
                        }
                    }else{
                        if(!this.state.isHyper){
                            array.push(it.id);
                        }
                    }
                }
            })
            //Log array which we can copy from the console and paste back into our code for SkillContainer to use
            console.log(array);
        })
        .catch(err => console.log(err));
    }

    //Not used
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SkillIdHandler