import React, { Component, Fragment } from 'react';

import withAuthorization from "../../Session/withAuthorization";
import SearchField from "../SearchField/SearchField";

class HomePage extends Component {
    //Get card searched
    fromSearchField(inputSearch) {
        console.log(inputSearch);
    }

    render(){
        return ( 
            <Fragment>
                    <div>
                        <h1>Home Page</h1>
                        <SearchField getCard={this.fromSearchField.bind(this)}/>
                    </div>
            </Fragment>
        );
    }
}
 
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);