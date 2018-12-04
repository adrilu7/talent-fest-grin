import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Button} from 'react-materialize';
import '../SignIn/SignIn.css';

class SearchField extends Component {

  inputSearch(event){
    this.props.getCard(event.target.value);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.doFetch();
  }

  render() {
    return (
      <form className="center-form" onSubmit={this.onSubmit.bind(this)}>
        <input
          className="search-bar"
          value={this.props.initialName}
          onChange={this.inputSearch.bind(this)}
          type="text"
          placeholder="Ingresa que carta buscas"
        />
        <Button waves='light' className='signInButton search' type="submit">Buscar</Button>
      </form >
    );
  }
}

SearchField.propTypes = {
  inputSearch: propTypes.func,
}

export default SearchField;
