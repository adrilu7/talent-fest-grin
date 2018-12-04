const BASE_URL = 'https://api.pokemontcg.io/v1/'

class api {
  async getByName(pokemonName) {
    const response = await fetch(`${BASE_URL}cards?name=${pokemonName}`)
    const data = await response.json()
    return data
  }
}

export default new api()
