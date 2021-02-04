import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleInputPokemonName = e => {
    this.setState({ pokemonName: e.currentTarget.value });
  };

  handleChangeName = e => {
    e.preventDefault();
    this.props.onChange(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <form action="" onSubmit={this.handleChangeName}>
        <input
          type="text"
          // className={ }
          name="pokemon"
          onChange={this.handleInputPokemonName}
          value={pokemonName}
          // id=""
        />
        <button type="submit">
          {' '}
          <ImSearch /> Search{' '}
        </button>
      </form>
    );
  }
}

export default PokemonForm;
