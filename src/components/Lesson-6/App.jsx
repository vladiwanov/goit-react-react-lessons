import { Component } from 'react';
// import { ReactComponent as myIcon} from './{файл с иконкамию.svg}'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class App extends Component {
  state = { pokemon: '' };

  handleFormSubmit = pokemonName => {
    console.log('pokemonName', pokemonName);
    // if (pokemonName === '') {
    //      return toast.warning ('введите имя покемона.')
    //     ;
    // }
    this.setState({ pokemon: pokemonName });
  };

  render() {
    const { pokemon } = this.state;
    console.log('pokemon--->', pokemon);
    return (
      <>
        <PokemonForm onChange={this.handleFormSubmit} />
        <PokemonInfo PokemonInfo={pokemon} />
        <ToastContainer />
      </>
    );
  }
}
