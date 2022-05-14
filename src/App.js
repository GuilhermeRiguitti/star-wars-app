import React, {useState}from 'react';
import CharacterDetailPage from './components/CharacterDetailPage/CharacterDetailPage';
import { BackgroundApp } from './components/CharacterDetailPage/StyledCharacterDetailPage';
import CharacterListPage from './components/CharacterListPage/CharacterListPage';

export default function App() {
  const [detalhes, setDetalhes] = useState(false)

  const verDetalhes = () => {
    setDetalhes(true);
  };
  const voltarList = () => {
    setDetalhes(false)
  }

  let pagina = <h1>Pagina erro</h1>;
      if(detalhes === false) {
        pagina = <CharacterListPage onClickDetalhes={verDetalhes} />
      }else{
        pagina = <CharacterDetailPage onClickVoltar={voltarList}/>
      }
  
  return (
      <BackgroundApp>
        {pagina}
      </BackgroundApp>
    );
  }


