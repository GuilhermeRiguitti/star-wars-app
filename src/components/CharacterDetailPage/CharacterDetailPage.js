import React, {useEffect , useState} from 'react';
import axios from 'axios';
import { ConteudoDetailPage, TituloPagina} from './StyledCharacterDetailPage';
export default function CharacterDetailPage(props) {
  const [detalhes, setDetalhes] = useState({});
  console.log(props.url)
  useEffect(()=>{
    pegarDetalhes();
  }, []
  )
  const pegarDetalhes = () => {
    axios
      .get(props.url,{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setDetalhes(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
      
  };
  
  return (
    <>
      <TituloPagina>
        <h1>STAR WARS</h1>
        <h3>CHARACTER DETAIL PAGE</h3>
      </TituloPagina>
      <ConteudoDetailPage>
        <h5>
          Name: {detalhes.name}  <br/> <br/>
          Height: {detalhes.height}  <br/> <br/> 
          Mass: {detalhes.mass}  <br/> <br/>
          Hair Color: {detalhes.hair_color} <br/> <br/>
          Skin Color: {detalhes.skin_color} <br/> <br/>
          Eye Color: {detalhes.eye_color} <br/> <br/>
          Birth Year: {detalhes.birth_year} <br/> <br/>
          Gender: {detalhes.gender} <br/>
        </h5>
      </ConteudoDetailPage>
    </>
  );
};


