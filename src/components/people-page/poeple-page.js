import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error";
import Row from "../row";

export default class PeoplePage extends Component {

    state = {
        selectedItem: 5,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList = <ItemList
            getData={this.props.getData}
            renderItems={this.props.renderItems}
            onItemSelected={this.onPersonSelected}
        />;

        const personDetail = <PersonDetails personId={this.state.selectedItem}/>;

        return <Row left={itemList} right={personDetail}/>

    }
}