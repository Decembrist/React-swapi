import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../servises/swapi-service";
import Loader from "../loader";

export default class PersonDetails extends Component {

    state = {
        person: null
    };

    swapi = new SwapiService();

    updatePerson = () => {
        const {personId} = this.props;

        if (!personId) {
            return;
        }

        this.swapi.getPerson(personId)
            .then((person) => {
                console.log(person);
                this.setState({person})
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

        const {person} = this.state;

        if (!person) {
            return <Loader/>;
        }

        const {id, name, gender, birthYear, eyeColor} = person;

        console.log(person);
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                <div className="card-body">
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
                </div>
            </div>
        )
    }
}
