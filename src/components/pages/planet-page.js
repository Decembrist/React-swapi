import React from 'react';
import {withRouter} from 'react-router-dom';
import Row from "../row";
import { ListPlanet, ItemPlanet } from '../sub-comp'



const PlanetPageSub =  ({history, match}) => {
    return (<Row left={<ListPlanet onItemSelect={(id) => history.push(id)}/>} right={<ItemPlanet itemId={match.params.id}/>}/>);
};

export default withRouter(PlanetPageSub);