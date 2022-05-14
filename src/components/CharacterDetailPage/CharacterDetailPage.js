import React from 'react';
import axios from 'axios';
import { SubTituloText, TituloText, Dados, BackgroundApp, TituloPagina} from './StyledCharacterDetailPage';
export default class CharacterDetailPage extends React.Component {
  state = {
    listaDetalhada: [],
    people:""
  };


  componentDidMount() {
    this.request();
  }
  
  

  request = () => {
    const url = 'https://swapi.dev/api/'
    axios
      .get(url + 'people', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        this.setState({ listaDetalhada: response.data.results });
      });
      
  };
  render() {
    const renderList = this.state.listaDetalhada.map((personagem) => {
      return <p><h3>{personagem.name}</h3> <br/> Height: {personagem.height} <br/> Mass:{personagem.mass} <br/> Birth Year: {personagem.birth_year} <br/> Gender: {personagem.gender} </p>
                  
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

