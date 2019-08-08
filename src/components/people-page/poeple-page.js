import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error";
import Row from "../row";
import SwapiService from "../../servises/swapi-service";
import ErrorBoundry from "../error-baundry/error-boundry";

export default class PeoplePage extends Component {

    SWApi = new SwapiService();

    state = {
        selectedItem: 5,

    };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList = (<ItemList
            getData={this.SWApi.getAllPeople}
            renderItems={({name, gender}) => `${name} (${gender})`}
            onItemSelected={this.onPersonSelected}
        >
            {(i) => `${i.name} ${i.birthYear}`}
        </ItemList>);

        const personDetail = (
            <ErrorBoundry >
                <PersonDetails personId={this.state.selectedItem}/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetail}/>
        )

    }
}