import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorIndicator from "../error";
import Row from "../row";
import SwapiService from "../../servises/swapi-service";
import ErrorBoundry from "../error-baundry";

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
            <ErrorBoundry>
                <ItemDetails
                    getImageUrl={this.SWApi.getPersonImage}
                    getData={this.SWApi.getPerson}
                    itemId={this.state.selectedItem}
                >
                    <Record label="Gender" value="gender" />
                    <Record label="Birth Year" value="birthYear" />
                    <Record label="Eye Color" value="eyeColor" />
                </ItemDetails>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetail}/>
        )

    }
}