import React, { Fragment } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import SignInPage from '../SignIn/SignIn';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import AdminPage from '../Admin/Admin';
import Page404 from '../Page404/Page404';

import * as ROUTES from '../../constants/routes';
import withAuthentication from '../../Session/withAuthentication';

const App = () => (
    <Router basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTES.ADMIN} component={AdminPage} />
          <Route component={Page404} />
        </Switch>
      </Fragment>
    </Router>
);

export default withAuthentication(App);
