import React, { Component } from "react";
import { Dropdown, NavItem, Button } from "react-materialize";
import "./NewDeck.css";

class NewDeck extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="deckContainer">
        <Dropdown trigger={<Button>Selecciona tu deck</Button>}>
          <NavItem id="OvereagerVictory">Overeager Victory</NavItem>
          <NavItem id="RoyalTsunami">Royal Tsunami</NavItem>
          <NavItem divider />
          <NavItem id="NewDeck">Crea un nuevo deck</NavItem>
        </Dropdown>
        <p>Aquí van a ir las cartas</p>
      </div>
    );
  }
}

export default NewDeck;
