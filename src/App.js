import React, {useState}from 'react';
import CharacterDetailPage from './components/CharacterDetailPage/CharacterDetailPage';
import { BackgroundApp } from './components/CharacterDetailPage/StyledCharacterDetailPage';
import CharacterListPage from './components/CharacterListPage/CharacterListPage';


export default function App() {
  const [pagina, setPagina] = useState("ListPage")
  const [url, setUrl] = useState ("")

  const mudarPagina = (pagina, url) => {
    setPagina(pagina)
    setUrl(url)
  }
  
  
 
      let paginaAtual = ""
      if(pagina === "ListPage") {
        paginaAtual = <CharacterListPage onClickDetalhes={
            mudarPagina.bind(this)
        }/>
          
        
      }else{paginaAtual = 
        <>
          <CharacterDetailPage url={url}/>
          <button onClick={ () => {setPagina("ListPage")}}>Voltar</button>
        </>
      }
  
  return (
      <BackgroundApp>
        {paginaAtual}
      </BackgroundApp>
    );
  }
  



