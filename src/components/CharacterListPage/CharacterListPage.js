import React from 'react';
import axios from 'axios';


export default class CharacterListPage extends React.Component {
  state = {
    lista: [],
  };

  componentDidMount() {
    this.request();
  }

  request = () => {
    const imprimirLista = this.state.lista
    axios
      .get('https://swapi.dev/api/planets', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        this.setState({ lista: response.data.results });
      });
      console.log(imprimirLista)
  };
  
  render() {
    const renderList = this.state.lista.map((objeto) => {
      return <p>{objeto.name}</p>;
    });

    return (
    <>
    <h1>CHARACTER LIST PAGE</h1>
    {renderList}
    <button onClick={this.props.onClickDetalhes}>Ver Detalhes</button>
    </>
    )
  }
}
