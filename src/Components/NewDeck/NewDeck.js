import React, { Component } from "react";
import {
  Dropdown,
  NavItem,
  Button,
  Card,
  CardTitle,
  Icon
} from "react-materialize";
import swal from 'sweetalert2';
import "./NewDeck.css";

class NewDeck extends Component {
  selectCard(data) {
    this.props.selectCard(data);
  }

  saveAlert () {
    if (this.props.data.length > 0) {
      swal({
        title: "¡Listo!",
        text: "Se ha guardado tu deck",
        type: "success",
        confirmButtonColor: '#4161c9'
      })
    } else {
      swal({
        title: "Opps...",
        text: "Necesitas seleccionar al menos una carta",
        type: "error",
        confirmButtonColor: '#e51210'
      })
    }
  }

  render() {
    return (
      <div className="deckContainer">
        <p>Selecciona en que deck quieres guardar tus cartas seleccionadas:</p>
        <div className="buttonsCards">
          <Dropdown trigger={<Button className="get-deck">Elige Deck</Button>}>
            <NavItem id="OvereagerVictory">Overeager Victory</NavItem>
            <NavItem id="RoyalTsunami">Royal Tsunami</NavItem>
            <NavItem divider />
            <NavItem id="NewDeck">Crea un nuevo deck</NavItem>
          </Dropdown>
          <Button className="save" onClick={() => {this.saveAlert()}}>
            <Icon>save</Icon>
          </Button>
        </div>
        <p>Cartas seleccionadas ({this.props.data.length})</p>
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
