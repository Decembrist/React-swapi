import React from 'react';

import './item-list.css';

const ItemList = (props) => {
    const {data, onItemSelect} = props;
    const items = data.map((item) => {
        const {id} = item;

        return (
            <li className="list-group-item"
                key={id}
                onClick={() =>{onItemSelect(id)}}>
                {item.name}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items.slice(0, 5)}
        </ul>
    );
};


export default ItemList;