import React, {useState , useEffect} from 'react';
import axios from 'axios';
import { TituloPagina, ConteudoListPage, Button } from './StyledCharacterListPage';
const CharacterListPage = (props) => {
  const [personagem, setPersonagem] = useState([]);

  useEffect(()=>{
    pegarPersonagens();
  }, []
  )
  const pegarPersonagens = () => {
    axios
      .get(`https://swapi.dev/api/people/`,{
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
    return <Button onClick={ () => {props.onClickDetalhes("Detalhes", people.url)}}>{people.name}</Button>
  }
  )
  return (
    <>
    <TituloPagina>
      <h1 >STAR WARS</h1>
      <h3>CHARACTER LIST PAGE</h3>
    </TituloPagina>
    <ConteudoListPage>
      {listaPersonagens}
    </ConteudoListPage>
    </>
    )
  }
export default CharacterListPage;
