import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";


export default class App extends Component {


    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>

                <PeoplePage />

            </div>
        );
    }
};