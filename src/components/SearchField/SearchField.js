import React, { Component } from 'react';
import propTypes from 'prop-types';

class SearchField extends Component {

  inputSearch(event){
    this.props.getCard(event.target.value);
  }

  render() {
    return (
      <section>
        <input
          value={this.props.initialName}
          onChange={this.inputSearch.bind(this)}
          type="text"
          placeholder="Ingresa que carta buscas"
        />
      </section>
    );
  }
}

SearchField.propTypes = {
  inputSearch: propTypes.func,
}

export default SearchField;
