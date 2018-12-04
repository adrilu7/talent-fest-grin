import React, { Component } from 'react';
import './NewDeck.css';

class NewDeck extends Component {
    render(){
        console.log(this.props.data);
        return(
            <div className="deckContainer">
                <span>Aquí van a ir las cartas</span>
            </div>
        )
    }
}
 
export default NewDeck;