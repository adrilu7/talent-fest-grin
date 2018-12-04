import React from 'react';

import withAuthorization from "../../Session/withAuthorization";
// import AuthUserContext from '../../Session/AuthUserContext';

const HomePage = () => {
    return ( 
        <div>
            <h1>Home Page</h1>
            <input />
        </div>
    );
}
 
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);