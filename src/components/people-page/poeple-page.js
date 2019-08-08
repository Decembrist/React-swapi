import React, {Component} from 'react';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error";

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

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        getData={this.props.getData}
                        renderItems={this.props.renderItems}
                        onItemSelected={this.onPersonSelected}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedItem}/>
                </div>
            </div>
        )
    }
}