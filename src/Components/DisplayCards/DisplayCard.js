import React, { Component } from 'react';
import {Card, CardTitle, Icon, Button} from 'react-materialize';
import './DisplayCard.css';

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
                            reveal={
                                <div className="centered">
                                    <p>SET: {pokemonData.set} Hp</p>
                                    <p>NÚMERO: {pokemonData.number}</p>
                                    <p>RAREZA: {pokemonData.rarity}</p>
                                    <p>HP: {pokemonData.hp}</p>
                                    <p>PRECIO: ${Math.floor((Math.random()*10 +1))} MXN</p>
                                    <Button className="add-card"><Icon>add</Icon></Button>
                                </div>

                            }
                            key={index}
                        >
                        </Card>
                    ))}
                </div>
    )}
}
 
export default DisplayCards;