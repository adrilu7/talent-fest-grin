import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../../Session/AuthUserContext';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut/SignOut';

const Navigation = () =>
  <AuthUserContext.Consumer>
    { authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () => (
    <div>
        <ul>
            <li>
                <Link to= {ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to= {ROUTES.ACCOUNT}>Tu cuenta</Link>
            </li>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () => (
        <div>
            <ul>
                <li>
                    <Link to= {ROUTES.SIGN_IN}>Entrar</Link>
                </li>
            </ul
            >
        </div> 
  );

export default Navigation;