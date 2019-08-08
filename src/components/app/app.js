import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../servises/swapi-service";


export default class App extends Component {

    SWApi = new SwapiService();

    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>

                <PeoplePage
                    renderItems={({name, gender}) => `${name} (${gender})`}
                    getData={this.SWApi.getAllPeople}
                />
                <PeoplePage
                    renderItems={({name}) => <span>{name}&nbsp;&nbsp;<button>!</button></span>}
                    getData={this.SWApi.getAllPlanets}
                />

            </div>
        );
    }
};