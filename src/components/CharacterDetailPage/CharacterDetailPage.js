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
          NAME: {detalhes.name}  <br/> <br/>
          HEIGHT: {detalhes.height}  <br/> <br/> 
          MASS: {detalhes.mass}  <br/> <br/>
          HAIR COLOR: {detalhes.hair_color} <br/> <br/>
          SKIN COLOR: {detalhes.skin_color} <br/> <br/>
          EYE COLOR: {detalhes.eye_color} <br/> <br/>
          BIRTH YEAR: {detalhes.birth_year} <br/> <br/>
          GENDER: {detalhes.gender} <br/>
        </h5>
      </ConteudoDetailPage>
    </>
  );
};


