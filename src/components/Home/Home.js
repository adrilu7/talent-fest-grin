import React, { Component } from 'react';
import SearchField from "../SearchField/SearchField";
import DisplayCard from "../DisplayCards/DisplayCard";
import NewDeck from "../NewDeck/NewDeck";
import api from "../../lib/api";
import NavBar from './Navbar'
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
                </div>
            </div>
        );
    }
}

 

export default Home;