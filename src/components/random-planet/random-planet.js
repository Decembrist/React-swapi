import React, {Component} from 'react';

import SwapiService from "../../servises/swapi-service";
import Loader from "../loader";
import ErrorIndicator from "../error";

import './random-planet.css';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        error: false
    };

    idInterval = null;

    componentDidMount() {
        this.updatePlanet();
        this.idInterval = setInterval(()=> this.updatePlanet(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.idInterval);
    }

    swapiService = new SwapiService();

    onPlanetLoaded = planet => this.setState({
      planet,
      loading: false,
      error: false
    });

    onError = () => {
        this.setState({
          error: true,
          loading: false,
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 4;

        this.swapiService.getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet))
            .catch(this.onError);
    };

    render() {
        const {planet, loading, error} = this.state;

        const hasError = !(error || loading);

        return (
            <div className="random-planet jumbotron rounded">
              {loading && <Loader/>}
              {hasError && <PlanetView planet={planet} />}
              {error && <ErrorIndicator />}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

  const {id, name, population, rotation, diameter} = planet;

  return (
      <React.Fragment>
        <img className="planet-image" alt={name}
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotation}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
  )
};