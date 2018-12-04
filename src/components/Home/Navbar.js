import React from 'react';
import {Navbar, NavItem,} from 'react-materialize';
import logo from '../../assets/POKEDECK-NOMBRE.svg';
import SignOut from '../SignOut/SignOut';
import './navBarStyle.css'

const navBar = () => (
    <Navbar className='nav-blue' right>
        <NavItem> <img src={logo} alt="logo-mypokedeck" className='logo'/> </NavItem>
        <NavItem></NavItem>
        <NavItem><SignOut/></NavItem>
    </Navbar>   
)

export default navBar