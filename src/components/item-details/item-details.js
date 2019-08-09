import React, {Component} from 'react';

import './item-details.css';
import Loader from "../loader";


const Record = ({item, label, value}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[value]}</span>
        </li>
    );
};

export {
    Record
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        loader: true,
        imageUrl: null
    };


    updatePerson = () => {
        const {itemId, getData, getImageUrl} = this.props;

        this.setState({loader: true});

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item, imageUrl: getImageUrl(item), loader: false})
            })
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updatePerson()
        }
    }

    render() {

        const {item, loader, imageUrl} = this.state;

        if (!item) {
            return <Loader/>;
        }

        const {name} = item;

        return (
            <div className="person-details card">
                {loader && <Loader/>}
                {!loader && <img className="person-image"
                                 src={imageUrl} alt={name}/>}

                {!loader && <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })}
                    </ul>
                </div>}
            </div>
        )
    }
}
