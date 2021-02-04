import { Component } from 'react';
import PokemonApi from '../PokemonApi';
console.log('PokemonApi', PokemonApi);

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    ////  loading: false,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.PokemonInfo;
    const newName = this.props.PokemonInfo;
    if (prevName !== newName) {
      //  this.setState({ loading: true , pokemon:''})
      this.setState({ status: 'pending', pokemon: '' });
      ////  setTimeout(() => {
      ////  /* fetch(`${URL_ADDR}${newName}`)
      //      .then(response => response.ok?  response.json(): Promise.reject(new Error(`ошибка поиска ${newName}` )))
      //      .then(pokemon => this.setState({ pokemon }))
      //      .catch(error => this.setState({error}))
      //      .finally(() => this.setState({ loading: false })) */
      //  PokemonApi(newName)
      PokemonApi.fetchPokemon(newName)
        .then(response =>
          response.ok
            ? response.json()
            : Promise.reject(
                new Error(
                  `ошибка поиска ${newName}. Все пропало покемон ${this.props.PokemonInfo} ушел гулять и не вернется`,
                ),
              ),
        )
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      /* //  //finally(() => this.setState({ loading: false })) */
      ////  }, 500)
    }
  }
  render() {
    const {
      pokemon,
      ////  loading,
      error,
      status,
    } = this.state;
    ////  const { PokemonInfo } = this.props;
    //// return (
    ////    <>
    ////     <h1>PokemonInfo</h1>
    ////         {loading&&<div>loading..</div>}
    ////          {!PokemonInfo && <h2>введите имя покемона</h2>}
    ////          {/* {error && <h2>все пропало покемон "{PokemonInfo}" ушел гулять и не вернется</h2>} */}
    ////          {error && <h2>{error.message}</h2>}
    ////          { pokemon && (
    ////              <div>
    ////              <p> {pokemon.name}</p>
    ////                  <img src={pokemon.sprites.other.['official-artwork'].front_default} width="300"  alt={pokemon.name} />
    ////              </div>
    ////          )}
    ////      </>
    ////   );
    if (status === 'idle') {
      return (
        <>
          <p>введите имя покемона</p>
        </>
      );
    }
    if (status === 'pending') {
      return <p>Заргужаем..</p>;
    }
    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p> {pokemon.name}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="300"
            alt={pokemon.name}
          />
        </div>
      );
    }
  }
}
