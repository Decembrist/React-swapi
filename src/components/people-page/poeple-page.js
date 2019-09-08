import React, {Component} from 'react';
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorIndicator from "../error";
import Row from "../row";
import SwapiService from "../../servises/swapi-service";
import ErrorBoundry from "../error-baundry";
import WrapperData from "../../hoc-helper/wrapper-data/wrapper-data";

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

    onGetList = () => {
        return
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const WpItemList = WrapperData(ItemList, this.SWApi.getAllPeople);
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
            <Row left={<WpItemList onPersonSelected={this.onPersonSelected}>{({name})=>name}</WpItemList>} right={personDetail}/>
        )

    }
}