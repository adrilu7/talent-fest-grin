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
            searchResultList: [],
            deckCards: [],
            total: 0
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

    // Add card to deck preview
    fromAddCardButtons(dataPokemon) {
        this.setState({
            deckCards: [ ...this.state.deckCards, dataPokemon ]
        })
    }

    render(){
        console.log(this.state.deckCards);
        return ( 
            <div>
                <NavBar />
                <SearchField getCard={this.fromSearchField.bind(this)} doFetch={this.fromSearchByName.bind(this)}/>
                <div className="main">
                    <DisplayCard data={this.state.searchResultList} selectCard={this.fromAddCardButtons.bind(this)} />
                    <NewDeck data={this.state.deckCards}/>
                </div>
            </div>
        );
    }
}

 

export default Home;