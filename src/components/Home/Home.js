import React, { Component } from 'react';
import NavBar from './Navbar';
import SearchField from "../SearchField/SearchField";
import DisplayCards from "../DisplayCards/DisplayCards";
import NewDeck from "../NewDeck/NewDeck";
import api from "../../lib/api";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchString: '',
            searchResultList: [],
            cardsInDeck: []
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
                <div className="row with-padding">
                    <DisplayCards className="col s12 m6 l6" data={this.state.searchResultList} />
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