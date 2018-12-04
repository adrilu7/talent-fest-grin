import React, { Component } from "react";
import { Dropdown, NavItem, Button, Card, CardTitle } from "react-materialize";
import "./NewDeck.css";

class NewDeck extends Component {
  selectCard(data) {
    this.props.selectCard(data);
  }

  render() {
    return (
      <div className="deckContainer">
        <p>Selecciona en que deck quieres guardar tus cartas seleccionadas:</p>
        <Dropdown trigger={<Button className="get-deck">Elige Deck</Button>}>
          <NavItem id="OvereagerVictory">Overeager Victory</NavItem>
          <NavItem id="RoyalTsunami">Royal Tsunami</NavItem>
          <NavItem divider />
          <NavItem id="NewDeck">Crea un nuevo deck</NavItem>
        </Dropdown>
        <p>Cartas seleccionadas:</p>
        {this.props.data.map((pokemonData, index) => (
          <Card
            className="small pokemonCard"
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

export default NewDeck;
