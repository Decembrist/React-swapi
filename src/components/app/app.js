import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {PeoplePageSub, PlanetPageSub} from "../pages";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ItemPeople} from "../sub-comp";


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Router>
                    <Header/>
                    {/*<RandomPlanet/>*/}

                    <Route path="/" exact render={()=> <h2>Main Screen</h2>}/>
                    <Route path="/people" exact component={PeoplePageSub}/>
                    <Route path="/people/:id"
                        render={({match})=>{
                            return <ItemPeople itemId={match.params.id} />
                        }}/>
                    <Route path="/planets/:id?" component={PlanetPageSub}/>
                </Router>
            </div>
        );
    }
};