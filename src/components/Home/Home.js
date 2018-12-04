import React, { Component, Fragment } from 'react';

import withAuthorization from "../../Session/withAuthorization";
// import AuthUserContext from '../../Session/AuthUserContext';
import SearchField from "../SearchField/SearchField";

class HomePage extends Component {
    render(){
        return ( 
            <Fragment>
                    <div>
                        <h1>Home Page</h1>
                        <SearchField/>
                    </div>
            </Fragment>
        );
    }
}
 
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);