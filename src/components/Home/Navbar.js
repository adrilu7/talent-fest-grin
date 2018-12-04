import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import logo from '../../assets/POKEDECK-NOMBRE.svg'
import './navBar.css'

const navBar = () => (
    <Navbar className='nav-blue' right>
        <NavItem> <img src={logo} className='logo'/> </NavItem>
        <NavItem></NavItem>
        <NavItem></NavItem>
    </Navbar>   
)

export default navBar