import React from 'react';
import {Row, Col} from 'react-materialize';
import NavBar from './Navbar';

const Home = () => (
    <div>
        <NavBar />
        <div class="row with-padding">
            <span class="col s12 m7 l7">This div is 12-columns wide on all screen sizes</span>
            <span class="col s6 m3 l3">6-columns (offset-by-6)</span>
        </div>
    </div>        

);
 

export default Home;