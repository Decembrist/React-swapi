import React from "react";
import ItemList from "../item-list";
import WrapperData from "../../hoc-helper/wrapper-data/wrapper-data";
import SwapiService from "../../servises/swapi-service";
import ItemDetails, {Record} from "../item-details/item-details";

const {
    getAllPeople,
    getAllPlanets,
    getPersonImage,
    getPlanetImage,
    getPlanet,
    getPerson
} = new SwapiService();

const ListPeople = WrapperData(ItemList, getAllPeople);
const ItemPeople = ({itemId}) => {
    return (
        <ItemDetails
            getImageUrl={getPersonImage}
            getData={getPerson}
            itemId={itemId}
        >
            <Record label="Gender" value="gender"/>
            <Record label="Birth Year" value="birthYear"/>
            <Record label="Eye Color" value="eyeColor"/>
        </ItemDetails>
    );
};

const ListPlanet = WrapperData(ItemList, getAllPlanets);
const ItemPlanet = ({itemId}) => {
    return (
        <ItemDetails
            getImageUrl={getPlanetImage}
            getData={getPlanet}
            itemId={itemId}
        >
            <Record label="Name:" value="name"/>
            <Record label="Population:" value="population"/>
        </ItemDetails>
    );
};

export {
    ListPeople,
    ListPlanet,
    ItemPlanet,
    ItemPeople
};