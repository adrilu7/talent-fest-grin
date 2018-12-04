import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';
import './DisplayCard.css';

class DisplayCards extends Component {
    selectCard(data) {
        this.props.selectCard(data);
    }

    render () {
        // console.log(this.props.data[0])
        return (
                <div className="cardsContainer">
                    {this.props.data.map((pokemonData, index) => (
                        <Card 
                            className="pokemonCard"
                            header={<CardTitle reveal image={pokemonData.imageUrl} waves='light'/>}
                            title={pokemonData.name}
                            reveal={
                                <div>
                                    <p>SET: {pokemonData.set} Hp</p>
                                    <p>NÚMERO: {pokemonData.number}</p>
                                    <p>RAREZA: {pokemonData.rarity}</p>
                                    <p>HP: {pokemonData.hp}</p>
                                    <p>PRECIO: ${Math.floor((Math.random()*10 +1))} MXN</p>
                                    <button type="button" onClick={() => this.selectCard(this.props.data[index])}>Agregar a deck</button>
                                </div>

                            }
                            key={index}
                            id={`${pokemonData.name}${index}`}
                        >
                        </Card>
                    ))}
                </div>
    )}
}
 
export default DisplayCards;