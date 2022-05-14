import React from 'react';
import axios from 'axios';
import { SubTituloText, TituloText, Dados, BackgroundApp, TituloPagina} from './StyledCharacterDetailPage';
export default class CharacterDetailPage extends React.Component {
  state = {
    listaDetalhada: [],
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
        this.setState({ listaDetalhada: response.data.results });
      });
      
  };
  render() {
    const renderList = this.state.listaDetalhada.map((objeto) => {
      return <p><h3>{objeto.name}</h3> <br/> Height: {objeto.height} <br/> Mass:{objeto.mass} <br/> Birth Year: {objeto.birth_year} <br/> Gender: {objeto.gender} </p>              
    });

   
  
  return (
    <BackgroundApp>
      <TituloPagina>
      <TituloText>STAR WARS</TituloText>
      <SubTituloText>CHARACTER DETAIL PAGE</SubTituloText>
      </TituloPagina>
      <Dados>
      {renderList}
      </Dados>
      <button onClick={this.props.onClickVoltar}>Voltar Lista</button>
    </BackgroundApp>
  );
};
}

