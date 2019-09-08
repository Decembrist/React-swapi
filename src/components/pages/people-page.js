import React from 'react';
import { ListPeople } from '../sub-comp'
import {withRouter} from 'react-router-dom'


const PeoplePageSub = ({history}) => {
    return (
        <ListPeople onItemSelect={(itemId) => history.push(itemId)}/>
    );
};

export default withRouter(PeoplePageSub);