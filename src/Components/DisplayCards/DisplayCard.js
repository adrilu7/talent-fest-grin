import React, { Component } from "react";
import { Card, CardTitle, Icon, Button } from "react-materialize";
import "./DisplayCard.css";

class DisplayCards extends Component {
  selectCard(data) {
    this.props.selectCard(data);
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.props.data.map((pokemonData, index) => (
          <Card
            className="pokemonCard"
            header={
              <CardTitle reveal image={pokemonData.imageUrl} waves="light" />
            }
            title={pokemonData.name}
            reveal={
              <div className="centered">
                <p>SET: {pokemonData.set} Hp</p>
                <p>NÚMERO: {pokemonData.number}</p>
                <p>RAREZA: {pokemonData.rarity}</p>
                <p>HP: {pokemonData.hp}</p>
                <p>PRECIO: ${Math.floor(Math.random() * 10 + 1)} MXN</p>
                <Button
                  className="add-card"
                  onClick={() => this.selectCard(this.props.data[index])}
                >
                  <Icon>add</Icon>
                </Button>
              </div>
            }
            key={index}
            id={`${pokemonData.name}${index}`}
          />
        ))}
      </div>
    );
  }
}

export default DisplayCards;
