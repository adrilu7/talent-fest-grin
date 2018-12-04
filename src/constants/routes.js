import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Admin from '../Components/Admin/Admin'
import RegisterCard from '../Components/SignIn/Register'
import Login from '../Components/SignIn/SignIn';
import Err from '../Components/Page404/Page404'
import Home from '../Components/Home/Home';

const admin = () => (
    <div>
        <Admin />
    </div>
);

const register = () => (
    <div>
        <RegisterCard />
    </div>
);

const login = () => (
    <Login />
)

const err = () => (
    <div>
        <Err />
    </div>
);

const home = () => (
    <div>
        <Home />
    </div>
)

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact strict path="/" component={login} />
                <Route exact strict path="/admin" component={admin} />
                <Route exact strict path="/register" component={register} />
                <Route exact strict path="/404" component={err} />
                <Route exact strict path="/home" component={home} />
            </Switch>
    </BrowserRouter>
);

export default Routes