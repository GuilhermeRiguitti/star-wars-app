import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { UltimaPaginacao, PrimeiraPaginacao, BotaoPaginacao, Paginacao, TituloPagina, ConteudoListPage, Button} from './StyledCharacterListPage';
const CharacterListPage = (props) => {
  const [personagem, setPersonagem] = useState([]);
  const [contador, setContador] = useState (1)
  useEffect(()=>{
    pegarPersonagens(contador);
    
  }, [contador]
  )

  const mudarPagina = (event) => {
    setContador(contador + 1)
  }
  
  const voltarPagina = (event) => {
    setContador(contador - 1)
  }


  const pegarPersonagens = () => {
    axios
      .get(`https://swapi.dev/api/people/?page=${contador}`,{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setPersonagem(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      }); 
  };
  const listaPersonagens = personagem.map((people) => {
    return <Button onClick={ () => {props.onClickDetalhes("Detalhes", people.url)}}>{people.name.toUpperCase()}</Button>
  }
  )
  if (contador === 1){ //se a mensagem for enviada pelo usuario eu irá para o lado direito 
    return (
      <>
        <TituloPagina>
          <h1 >STAR WARS</h1>
          <h3>CHARACTER LIST PAGE</h3>
        </TituloPagina>
        <ConteudoListPage>
          {listaPersonagens}
        </ConteudoListPage>
        <PrimeiraPaginacao>
          <BotaoPaginacao value={contador} onClick={mudarPagina}>Proxima Pagina</BotaoPaginacao>
        </PrimeiraPaginacao>
      </>
    )
  }else if(contador !== 1 && contador !== 9){
      return (
        <>
          <TituloPagina>
            <h1 >STAR WARS</h1>
            <h3>CHARACTER LIST PAGE</h3>
          </TituloPagina>
          <ConteudoListPage>
            {listaPersonagens}
          </ConteudoListPage>
          <Paginacao>
            <BotaoPaginacao value={contador} onClick={voltarPagina}>Voltar</BotaoPaginacao>
            <BotaoPaginacao value={contador} onClick={mudarPagina}>Proxima Pagina</BotaoPaginacao> 
          </Paginacao>
        </>
      )
    }else if(contador === 9){
      return (
        <>
        <TituloPagina>
          <h1 >STAR WARS</h1>
          <h3>CHARACTER LIST PAGE</h3>
        </TituloPagina>
        <ConteudoListPage>
          {listaPersonagens}
        </ConteudoListPage>
        <UltimaPaginacao>
          <BotaoPaginacao value={contador} onClick={voltarPagina}>Voltar</BotaoPaginacao>
        </UltimaPaginacao>
      </>
      )
    }
  }
export default CharacterListPage;
