import React, { Component } from 'react';
import propTypes from 'prop-types';

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
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          value={this.props.initialName}
          onChange={this.inputSearch.bind(this)}
          type="text"
          placeholder="Ingresa que carta buscas"
        />
        <button type="submit">Buscar</button>
      </form >
    );
  }
}

SearchField.propTypes = {
  inputSearch: propTypes.func,
}

export default SearchField;
