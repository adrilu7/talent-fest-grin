import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';
import './DisplayCards.css';

class DisplayCards extends Component {
    render () {
        console.log(this.props.data)
        return (
                <div className="cardsContainer">
                    {this.props.data.map((pokemonData, index) => (
                        <Card 
                            className="pokemonCard"
                            header={<CardTitle reveal image={pokemonData.imageUrl} waves='light'/>}
                            title={pokemonData.name}
                            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            key={index}
                        >
                        </Card>
                    ))}
                </div>
    )}
}
 
export default DisplayCards;