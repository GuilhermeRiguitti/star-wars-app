import React from 'react';
import axios from 'axios';
import { SubTituloText, Dados, TituloPagina, TituloText } from '../CharacterDetailPage/StyledCharacterDetailPage';



export default class CharacterListPage extends React.Component {
  state = {
    lista: [],
  };

  componentDidMount() {
    this.request();
  }

  request = () => {
    axios
      .get('https://swapi.dev/api/people/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        this.setState({ lista: response.data.results })
      })
      .catch((error) =>{
        console.log(error.response.data)
      }
      ) ;
      
  };
  
  render() {
    const renderList = this.state.lista.map((objeto) => {
      return <h1 onClick={this.props.onClickDetalhes}>{objeto.name}  </h1>              
    });

    return (
    <>
    <TituloPagina>
    <TituloText>STAR WARS</TituloText>
    <SubTituloText>CHARACTER LIST PAGE</SubTituloText>
    </TituloPagina>
    <Dados>
    {renderList}
    <button onClick={this.props.onClickDetalhes}>Ver Detalhes</button>
    </Dados>
    </>
    )
  }
}
