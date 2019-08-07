import React, {Component} from 'react';

import SwapiService from "../../servises/swapi-service";

import './item-list.css';
import Loader from "../loader";

export default class ItemList extends Component {
    swapi = new SwapiService();
    state = {
        PeopleList: null
    };

    componentDidMount() {
        this.swapi.getAllPeople()
            .then(PeopleList => {
                this.setState({PeopleList})
            })
    }

    renderItems = (arr) => {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                   {name}
                </li>
            );
        });
    };

    render() {

        const {PeopleList} = this.state;

        if(!PeopleList) {
            return <Loader />;
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(PeopleList).slice(0, 5)}
            </ul>
        );
    }
}
