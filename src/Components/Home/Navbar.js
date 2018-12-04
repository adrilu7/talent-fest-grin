import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import logo from '../../assets/POKEDECK-NOMBRE.svg';
import SignOut from '../SignOut/SignOut';
import './navBarStyle.css'

const navBar = () => (
    <div>
            <Navbar brand={<img src={logo} alt="logo-mypokedeck" className='logo'/>}>
                <NavItem><SignOut/></NavItem>
            </Navbar>
        </div>
)

export default navBar