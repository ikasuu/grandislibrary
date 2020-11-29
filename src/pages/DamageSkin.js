import React, { Component } from 'react'
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Helmet } from 'react-helmet';
import { version } from '../special/Values';
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage'
import '../css/page.css';

export class DamageSkin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data: {},
            loading: true,
            fail: false
        }
    }

    componentDidMount(){
        fetch(`./data/DamageSkin.img.json`)
        .then(res => res.json())
        .then(fetchedData => {this.setState({data: fetchedData, loading: false, fail: false}, this.fetchDamageSkin)})
        .catch(err => this.setState({fail: true}));
    }

    fetchDamageSkin(){
        const { data } = this.state;
        const skinHolder = [];
        data.children.forEach( skin => {
            var request = [];
            var retrievedHolder = [];
            var i;

            axiosRetry(axios, { retries: 5 }); //Retries request up to 5 times if request fails

            // for(i = 0; i < 10; i++){
            //     request.push(axios.get(`https://maplestory.io/api/GMS/${version}/Effect/DamageSkin.img/${skin}/NoCri1/${i}`));
            //     console.log(i);
            // }
            // for(i = 0; i < 10; i++){
            //     request.push(axios.get(`https://maplestory.io/api/GMS/${version}/Effect/DamageSkin.img/${skin}/NoRed1/${i}`));
            // }

            // axios.all(request)
            // .then(response => {
            //     response.forEach(it => {
            //         retrievedHolder.push(it.data.value);
            //         console.log(it.data.value);
            //     });
            // })
            // .catch(err => console.log(err));
        })
    }

    render() {
        return (
            <div>
            <Helmet>
                <title>Damage Skin | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.ristonia}.jpg`}/>
            <h1 className="page-title">Damage Skin</h1>
        </div>
        )
    }
}

export default DamageSkin
