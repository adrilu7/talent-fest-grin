import React from 'react';
import NavBar from './Navbar';

const Home = () => (
    <div>
        <NavBar />
        <div className="row with-padding">
            <span className="col s12 m7 l7">This div is 12-columns wide on all screen sizes</span>
            <span className="col s6 m3 l3">6-columns (offset-by-6)</span>
        </div>
    </div>        

);
 

export default Home;