import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../servises/swapi-service";
import Loader from "../loader";

export default class PersonDetails extends Component {

    state = {
        person: null,
        loader: true
    };

    swapi = new SwapiService();

    updatePerson = () => {
        const {personId} = this.props;

        this.setState({loader: true});

        if (!personId) {
            return;
        }

        this.swapi.getPerson(personId)
            .then((person) => {
                this.setState({person, loader: false})
            })
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId) {
            this.updatePerson()
        }
    }

    render() {

        const {person, loader} = this.state;

        if (!person) {
            return <Loader/>;
        }

        const {id, name, gender, birthYear, eyeColor} = person;

        return (
            <div className="person-details card">
                {loader && <Loader/>}
                {!loader && <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>}

                {!loader && <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>}
            </div>
        )
    }
}
