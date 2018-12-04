import React, { Component } from 'react';
import swal from 'sweetalert2';

import SearchField from "../SearchField/SearchField";
import DisplayCard from "../DisplayCards/DisplayCard";
import NewDeck from "../NewDeck/NewDeck";
import Loader from "../Loader/Loader";
import api from "../../lib/api";
import NavBar from './Navbar'
import './navBarStyle.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchString: '',
            searchResultList: [],
            isLoaded: 'waiting',
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
        this.setState({isLoaded: 'loading', searchResultList: []})
        const pokemonData = await api.getByName(this.state.searchString);        
        this.setState({ searchResultList: pokemonData.cards })
        this.setState({isLoaded: 'waiting'})
    }

    // Add card to deck preview
    fromAddCardButtons(dataPokemon) {
        this.setState({
            deckCards: [ ...this.state.deckCards, dataPokemon ]
        })
        swal({
            title: "¡Listo!",
            text: "Se ha seleccionado la carta",
            type: "success",
            confirmButtonColor: '#4161c9'
          })
    }

    render(){
        console.log(this.state.deckCards);
        return ( 
            <div>
                <NavBar />
                <SearchField getCard={this.fromSearchField.bind(this)} doFetch={this.fromSearchByName.bind(this)}/>
                <div className="main">
                    <Loader status={this.state.isLoaded}/>
                    <DisplayCard data={this.state.searchResultList} selectCard={this.fromAddCardButtons.bind(this)} />
                    <NewDeck data={this.state.deckCards}/>
                </div>
            </div>
        );
    }
}

 

export default Home;