import React from 'react';
import CharacterDetailPage from './components/CharacterDetailPage/CharacterDetailPage';
import CharacterListPage from './components/CharacterListPage/CharacterListPage';

export default class App extends React.Component {
  state = {
    detalhes: false
  }

  verDetalhes = () => {
    this.setState({detalhes: true});
  };
  voltarList = () => {
    this.setState({detalhes: false})
  }
  
  render() {
    let pagina = <h1>Pagina erro</h1>;
      if(this.state.detalhes === false) {
        pagina = <CharacterListPage onClickDetalhes={this.verDetalhes} />
      }else{
        pagina = <CharacterDetailPage onClickVoltar={this.voltarList}/>
      }

    return (
      <>
        <h1>STAR WARS</h1>
        {pagina}
      </>
    );
  }
}

