import React, { Component } from 'react';
import NavBar from './NavBar';
import SearchField from "../SearchField/SearchField";
import DisplayCard from "../DisplayCards/DisplayCard";
import NewDeck from "../NewDeck/NewDeck";
import api from "../../lib/api";
import './navBarStyle.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchString: '',
            searchResultList: []
        }
    }
    // Get string to search
    fromSearchField(inputSearch) {
        this.setState({ searchString: inputSearch });
    }

    // Search by pokemon name
    async fromSearchByName(){
        const pokemonData = await api.getByName(this.state.searchString);        
        this.setState({ searchResultList: pokemonData.cards })
    }

    render(){
        return ( 
            <div>
                <NavBar />
                <SearchField getCard={this.fromSearchField.bind(this)} doFetch={this.fromSearchByName.bind(this)}/>
                <div className="main">
                    <DisplayCard data={this.state.searchResultList} />
                    <NewDeck/>
                    {/* <span className="col s12 m7 l7">This div is 12-columns wide on all screen sizes</span> */}
                    {/* <span className="col s12 m5 l5">6-columns (offset-by-6)</span> */}
                </div>
            </div>
        );
    }
}
// const Home = () => (
//     <div>
//         <NavBar />
//         <div class="row with-padding">
//             <span class="col s12 m7 l7">This div is 12-columns wide on all screen sizes</span>
//             <span class="col s6 m3 l3">6-columns (offset-by-6)</span>
//         </div>
//     </div>        

// );
 

export default Home;